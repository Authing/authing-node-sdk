import axios from 'axios';
import base64url from 'base64url';
import { createSecretKey } from 'crypto';
import { IncomingMessage, ServerResponse } from 'http';
import { compactVerify } from 'jose';
import { TextDecoder } from 'util';
import {
  AccessToken,
  AuthUrlResult,
  AuthURLParams,
  CodeToTokenParams,
  IDToken,
  JoseKey,
  LoginState,
  LoginTransaction,
  LogoutURLParams,
  OIDCTokenResponse,
  RefreshTokenParams,
  UserInfo,
} from './AuthClientInterface';
import { AuthingAuthInitOptions, DEFAULT_COOKIE_KEY, DEFAULT_SCOPE } from './AuthClientOptions';
import {
  createQueryParams,
  domainC14n,
  generateRandomString,
  parseJWKS,
} from './utils';

export class AuthClient {
  private readonly options: Required<AuthingAuthInitOptions>;
  private readonly domain: string;
  private readonly jwks: Promise<JoseKey[]>;

  constructor(options: AuthingAuthInitOptions) {
    options.cookieKey = options.cookieKey ?? DEFAULT_COOKIE_KEY;
    options.scope = options.scope ?? DEFAULT_SCOPE;

    if (!options.scope?.includes('openid')) {
      throw new Error('scope 中必须包含 openid');
    }

    this.options = options as any;
    this.domain = domainC14n(options.domain);

    if (options.serverJWKS) {
      this.jwks = parseJWKS(options.serverJWKS);
    } else {
      this.jwks = axios
        .get(`${this.domain}/oidc/.well-known/jwks.json`)
        .then((res) => parseJWKS(res.data))
        .catch((e) => {
          throw new Error(
            `自动获取认证服务器 JWKS 公钥失败, 请检查域名是否正确, 或手动指定 serverJWKS 参数: ${e.message}`,
          );
        });
    }
  }

  /**
   * 将用户浏览器重定向到 Authing 的认证发起 URL 进行认证，利用 Cookie 将上下文信息传递到应用回调端点
   *
   * @param res http 响应对象，用于设置上下文 Cookie 并进行重定向
   *
   * @param options.scope 应用侧向 Authing 请求的权限，覆盖初始化参数中的对应设置
   * @param options.state 中间状态标识符，默认自动生成
   * @param options.nonce 出现在 ID Token 中的随机字符串，默认自动生成
   * @param options.redirectUri 回调地址，覆盖初始化参数中的对应设置
   * @param options.forced 即便用户已经登录也强制显示登录页
   */
  async loginWithRedirect(
    res: ServerResponse,
    options: {
      scope?: string;
      state?: string;
      nonce?: string;
      redirectUri?: string;
      forced?: boolean;
    } = {},
  ): Promise<void> {
    const { url, state, nonce } = this.buildAuthUrl(options);
    res.setHeader('Location', url);

    const tx: LoginTransaction = {
      state,
      nonce,
      redirectUri: options.redirectUri ?? this.options.redirectUri,
    };

    // 设置中间态 cookie 用来在回调端点验证认证结果
    res.setHeader(
      'Set-Cookie',
      `${this.options.cookieKey}=${base64url.encode(
        JSON.stringify(tx),
      )}; HttpOnly; SameSite=Lax`,
    );

    res.writeHead(302).end();
  }

  /**
   * 生成认证发起 URL
   *
   * @param options.scope 本次认证中请求获得的权限，覆盖初始化参数中的对应设置
   * @param options.state 中间状态标识符，默认自动生成
   * @param options.nonce 出现在 ID Token 中的随机字符串，默认自动生成
   * @param options.redirectUri 回调地址，覆盖初始化参数中的对应设置
   * @param options.forced 即便用户已经登录也强制显示登录页
   */
  buildAuthUrl(
    options: {
      scope?: string;
      state?: string;
      nonce?: string;
      redirectUri?: string;
      forced?: boolean;
    } = {},
  ): AuthUrlResult {
    const state = options.state ?? generateRandomString(16);
    const nonce = options.nonce ?? generateRandomString(16);
    const scope = options.scope ?? this.options.scope;

    const params: AuthURLParams = {
      redirect_uri: options.redirectUri ?? this.options.redirectUri,
      response_mode: 'query',
      response_type: 'code',
      client_id: this.options.appId,
      scope,
      state,
      nonce,
    };

    if (options.forced) {
      params.prompt = 'login';
    } else if (scope.split(' ').includes('offline_access')) {
      params.prompt = 'consent';
    }

    return {
      url: `${this.domain}/oidc/auth?${createQueryParams(params)}`,
      state,
      nonce,
    };
  }

  /**
   * 在应用回调端点处理认证返回结果，利用 Cookie 中传递的上下文信息进行安全验证，并获取用户登录态
   *
   * @param req http 请求对象，用于获取认证结果和上下文 Cookie
   * @param res http 响应对象，只用于清除上下文 Cookie
   */
  async handleRedirectCallback(
    req: IncomingMessage,
    res: ServerResponse,
  ): Promise<LoginState> {
    if (!req.url) {
      throw new Error('req 对象没有 url');
    }

    const url = new URL(req.url, 'http://dummy');
    const error = url.searchParams.get('error');
    if (error) {
      throw new Error(
        `认证服务器返回错误 ${error}: ${url.searchParams.get(
          'error_description',
        )}`,
      );
    }

    const code = url.searchParams.get('code');
    if (!code) {
      throw new Error('认证服务器未返回授权码');
    }

    const cookieKey = `${this.options.cookieKey}=`;
    const txStr = (req.headers['cookie'] ?? req.headers['Cookie'])
      ?.toString()
      .split('; ')
      .find((item) => item.startsWith(cookieKey))
      ?.substring(cookieKey.length);

    if (!txStr) {
      throw new Error('Cookie 中没有中间态，认证失败');
    }

    const tx: LoginTransaction = JSON.parse(base64url.decode(txStr));
    // 清除中间态 cookie
    res.setHeader(
      'Set-Cookie',
      `${this.options.cookieKey}=; HttpOnly; SameSite=Lax; Max-Age=0`,
    );

    const state = url.searchParams.get('state');
    if (state !== tx.state) {
      throw new Error('state 验证失败');
    }

    const loginState = await this.getLoginStateByAuthCode(code, tx.redirectUri);

    if (loginState.parsedIDToken.nonce !== tx.nonce) {
      throw new Error('nonce 校验失败');
    }

    return loginState;
  }

  /**
   * 用授权码获取用户登录态
   *
   * @param code Authing 返回的授权码
   * @param redirectUri 发起认证时传入的回调地址
   */
  async getLoginStateByAuthCode(
    code: string,
    redirectUri: string,
  ): Promise<LoginState> {
    const tokenParam: CodeToTokenParams = {
      code,
      client_id: this.options.appId,
      client_secret: this.options.appSecret,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
    };

    const { data } = await axios.post(
      `${this.domain}/oidc/token`,
      createQueryParams(tokenParam),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );

    return this.buildLoginState(data);
  }

  /**
   * 验证并解析 Access Token
   *
   * @param token Access Token
   */
  async parseAccessToken(token: string): Promise<AccessToken> {
    const jwks = await this.jwks;
    const { payload } = await compactVerify(
      token,
      (h, _t) => (jwks.find((k) => h.kid === k.id) ?? jwks[0]).key,
    );
    return JSON.parse(new TextDecoder().decode(payload)) as AccessToken;
  }

  /**
   * 验证并解析 ID Token
   *
   * @param token ID Token
   */
  async parseIDToken(token: string): Promise<IDToken> {
    const jwks = await this.jwks;
    const { payload } = await compactVerify(token, (h, _t) => {
      if (h.alg === 'HS256') {
        return createSecretKey(Buffer.from(this.options.appSecret));
      }
      return (jwks.find((k) => h.kid === k.id) ?? jwks[0]).key;
    });
    return JSON.parse(new TextDecoder().decode(payload)) as IDToken;
  }

  /**
   * 用 Access Token 获取用户身份信息
   *
   * @param accessToken Access Token
   */
  async getUserInfo(accessToken: string): Promise<UserInfo> {
    const { data } = await axios.get(`${this.domain}/oidc/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // TODO: 存在 200 的错误场景吗？
    // if (data.error) {
    //   throw new Error(
    //     `认证服务器返回错误 ${data.error}: ${data.error_description}`,
    //   );
    // }
    return data as UserInfo;
  }

  /**
   * 用 Refresh Token 刷新用户的登录态，延长过期时间
   *
   * 为了获取 Refresh Token，需要在 scope 参数中加入 offline_access
   *
   * @param refreshToken Refresh Token
   */
  async refreshLoginState(refreshToken: string): Promise<LoginState> {
    const tokenParam: RefreshTokenParams = {
      client_id: this.options.appId,
      client_secret: this.options.appSecret,
      refresh_token: refreshToken,
      grant_type: 'refresh_token',
    };

    const { data } = await axios.post(
      `${this.domain}/oidc/token`,
      createQueryParams(tokenParam),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );

    return this.buildLoginState(data);
  }

  /**
   * 将浏览器重定向到 Authing 的登出发起 URL 进行登出
   *
   * @param res http 响应对象，用于进行重定向
   *
   * @param options.idToken 用户登录时获取的 ID Token，用于无效化用户 Token，建议传入
   * @param options.redirectUri 登出完成后的重定向目标 URL，覆盖初始化参数中的对应设置
   * @param options.state 传递到目标 URL 的中间状态标识符
   */
  async logoutWithRedirect(
    res: ServerResponse,
    options: {
      idToken?: string;
      redirectUri?: string;
      state?: string;
    } = {},
  ): Promise<void> {
    res.setHeader('Location', this.buildLogoutUrl(options)).writeHead(302);
  }

  /**
   * 生成登出 URL
   *
   * @param options.idToken 用户登录时获取的 ID Token，用于无效化用户 Token，建议传入
   * @param options.redirectUri 登出完成后的重定向目标 URL，覆盖初始化参数中的对应设置
   * @param options.state 传递到目标 URL 的中间状态标识符
   */
  buildLogoutUrl(
    options: {
      idToken?: string;
      redirectUri?: string;
      state?: string;
    } = {},
  ): string {
    const redirectUri = options.redirectUri ?? this.options.logoutRedirectUri;
    const params: LogoutURLParams = {
      ...(redirectUri && {
        post_logout_redirect_uri: redirectUri,
        state: options.state,
      }),
      id_token_hint: options.idToken,
    };
    return `${this.domain}/oidc/session/end?${createQueryParams(params)}`;
  }

  private async buildLoginState(
    tokenRes: OIDCTokenResponse,
  ): Promise<LoginState> {
    return {
      accessToken: tokenRes.access_token,
      idToken: tokenRes.id_token,
      refreshToken: tokenRes.refresh_token,
      expireAt: tokenRes.expires_in,
      parsedIDToken: await this.parseIDToken(tokenRes.id_token),
      parsedAccessToken: await this.parseAccessToken(tokenRes.access_token),
    };
  }
}
