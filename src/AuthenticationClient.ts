import base64url from "base64url";
import { createSecretKey } from "crypto";
import { IncomingMessage, ServerResponse } from "http";
import { compactVerify } from "jose";
import { TextDecoder } from "util";
import {
  AccessToken,
  AuthUrlResult,
  AuthURLParams,
  IDToken,
  LoginTransaction,
  LogoutURLParams,
  OIDCTokenResponse,
} from "./AuthenticationClientInterface";
import {
  AuthenticationClientInitOptions,
  DEFAULT_COOKIE_KEY,
  DEFAULT_SCOPE,
} from "./AuthenticationClientOptions";
import {
  createQueryParams,
  domainC14n,
  generateRandomString,
  JoseKey,
  JWKSObject,
  parseJWKS,
  serialize,
} from "./utils";
import sha256 from "crypto-js/sha256";
import CryptoJS from "crypto-js";
import { AuthenticationHttpClient } from "./AutherticationHttpClient";
import {
  OidcParams,
  OauthParams,
  CasParams,
  LogoutParams,
  Cas20ValidationFailureResult,
  Cas20ValidationSuccessResult,
} from "./utils/types";
import { SignInOptionsDto } from "./models";
// ==== AUTO GENERATED AUTHENTICATION IMPORTS BEGIN ====
import type { EnrollFactorDto } from "./models/EnrollFactorDto";
import type { EnrollFactorRespDto } from "./models/EnrollFactorRespDto";
import type { GetFactorRespDto } from "./models/GetFactorRespDto";
import type { ListEnrolledFactorsRespDto } from "./models/ListEnrolledFactorsRespDto";
import type { ListFactorsToEnrollRespDto } from "./models/ListFactorsToEnrollRespDto";
import type { ResetFactorRespDto } from "./models/ResetFactorRespDto";
import type { RestFactorDto } from "./models/RestFactorDto";
import type { SendEnrollFactorRequestDto } from "./models/SendEnrollFactorRequestDto";
import type { SendEnrollFactorRequestRespDto } from "./models/SendEnrollFactorRequestRespDto";
import type { AuthorizedResourcePaginatedRespDto } from "./models/AuthorizedResourcePaginatedRespDto";
import type { CommonResponseDto } from "./models/CommonResponseDto";
import type { DecryptWechatMiniProgramDataDto } from "./models/DecryptWechatMiniProgramDataDto";
import type { GenerateBindExtIdpLinkRespDto } from "./models/GenerateBindExtIdpLinkRespDto";
import type { GetAccessibleAppsRespDto } from "./models/GetAccessibleAppsRespDto";
import type { GetExtIdpsRespDto } from "./models/GetExtIdpsRespDto";
import type { GetIdentitiesRespDto } from "./models/GetIdentitiesRespDto";
import type { GetLoggedInAppsRespDto } from "./models/GetLoggedInAppsRespDto";
import type { GetLoginHistoryRespDto } from "./models/GetLoginHistoryRespDto";
import type { GetWechatAccessTokenDto } from "./models/GetWechatAccessTokenDto";
import type { GetWechatAccessTokenRespDto } from "./models/GetWechatAccessTokenRespDto";
import type { GetWechatMiniProgramPhoneDto } from "./models/GetWechatMiniProgramPhoneDto";
import type { SignupDto } from "./models/SignupDto";
import type { UnbindExtIdpDto } from "./models/UnbindExtIdpDto";
import type { UploadDto } from "./models/UploadDto";
import type { UploadRespDto } from "./models/UploadRespDto";
import type { UserDepartmentPaginatedRespDto } from "./models/UserDepartmentPaginatedRespDto";
import type { UserSingleRespDto } from "./models/UserSingleRespDto";
import type { BindEmailDto } from "./models/BindEmailDto";
import type { BindPhoneDto } from "./models/BindPhoneDto";
import type { ChangeQRCodeStatusDto } from "./models/ChangeQRCodeStatusDto";
import type { CheckQRCodeStatusRespDto } from "./models/CheckQRCodeStatusRespDto";
import type { DeleteAccounDto } from "./models/DeleteAccounDto";
import type { ExchangeTokenSetWithQRcodeTicketDto } from "./models/ExchangeTokenSetWithQRcodeTicketDto";
import type { GeneQRCodeRespDto } from "./models/GeneQRCodeRespDto";
import type { GenerateQrcodeDto } from "./models/GenerateQrcodeDto";
import type { GetAlipayAuthInfoRespDto } from "./models/GetAlipayAuthInfoRespDto";
import type { GetCountryListRespDto } from "./models/GetCountryListRespDto";
import type { GetSecurityInfoRespDto } from "./models/GetSecurityInfoRespDto";
import type { IsSuccessRespDto } from "./models/IsSuccessRespDto";
import type { LoginTokenRespDto } from "./models/LoginTokenRespDto";
import type { PasswordResetVerifyResp } from "./models/PasswordResetVerifyResp";
import type { ResetPasswordDto } from "./models/ResetPasswordDto";
import type { SendEmailDto } from "./models/SendEmailDto";
import type { SendEmailRespDto } from "./models/SendEmailRespDto";
import type { SendSMSDto } from "./models/SendSMSDto";
import type { SendSMSRespDto } from "./models/SendSMSRespDto";
import { SigninByCredentialsDto } from "./models/SigninByCredentialsDto";
import type { SigninByMobileDto } from "./models/SigninByMobileDto";
import type { SystemInfoResp } from "./models/SystemInfoResp";
import type { UpdateEmailDto } from "./models/UpdateEmailDto";
import type { UpdateEmailVerifyRequestDto } from "./models/UpdateEmailVerifyRequestDto";
import type { UpdatePasswordDto } from "./models/UpdatePasswordDto";
import type { UpdatePhoneDto } from "./models/UpdatePhoneDto";
import type { UpdateUserProfileDto } from "./models/UpdateUserProfileDto";
import type { VerifyDeleteAccountRequestDto } from "./models/VerifyDeleteAccountRequestDto";
import type { VerifyDeleteAccountRequestRespDto } from "./models/VerifyDeleteAccountRequestRespDto";
import type { VerifyResetPasswordRequestDto } from "./models/VerifyResetPasswordRequestDto";
import type { VerifyUpdateEmailRequestRespDto } from "./models/VerifyUpdateEmailRequestRespDto";
import type { VerifyUpdatePhoneRequestDto } from "./models/VerifyUpdatePhoneRequestDto";
import type { VerifyUpdatePhoneRequestRespDto } from "./models/VerifyUpdatePhoneRequestRespDto";
import type { PreCheckCodeDto } from "./models/PreCheckCodeDto";
import type { PreCheckCodeRespDto } from "./models/PreCheckCodeRespDto";

// ==== AUTO GENERATED AUTHENTICATION IMPORTS END ====

export class AuthenticationClient {
  private readonly options: Required<AuthenticationClientInitOptions>;
  private readonly httpClient: AuthenticationHttpClient;

  constructor(options: AuthenticationClientInitOptions) {
    options.cookieKey = options.cookieKey ?? DEFAULT_COOKIE_KEY;
    options.scope = options.scope ?? DEFAULT_SCOPE;
    options.protocol = options.protocol ?? "oidc";
    options.tokenEndPointAuthMethod =
      options.tokenEndPointAuthMethod ?? "client_secret_post";
    options.introspectionEndPointAuthMethod =
      options.introspectionEndPointAuthMethod ?? "client_secret_post";
    options.revocationEndPointAuthMethod =
      options.revocationEndPointAuthMethod ?? "client_secret_post";
    options.timeout = options.timeout || 10000;

    if (!options.scope?.includes("openid")) {
      throw new Error("scope 中必须包含 openid");
    }

    // 判断必传参数
    if (!options.appId) {
      throw new Error(
        "Init AuthenticationClient failed: appId is not provided"
      );
    }

    if (!options.appHost) {
      throw new Error(
        "Init AuthenticationClient failed: appHost is not provided"
      );
    }

    if (options.tokenEndPointAuthMethod !== "none" && !options.appSecret) {
      throw new Error(
        `Init AuthenticationClient failed: appSecret is not provided when tokenEndPointAuthMethod is not "none"`
      );
    }

    this.options = options as any;
    this.options.appHost = domainC14n(options.appHost);

    this.httpClient = new AuthenticationHttpClient(this.options);
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
  public async loginWithRedirect(
    res: ServerResponse,
    options: {
      scope?: string;
      state?: string;
      nonce?: string;
      redirectUri?: string;
      forced?: boolean;
    } = {}
  ): Promise<void> {
    const { url, state, nonce } = this.buildAuthorizeUrl(options);
    res.setHeader("Location", url);

    const tx: LoginTransaction = {
      state,
      nonce,
      redirectUri: options.redirectUri ?? this.options.redirectUri,
    };

    // 设置中间态 cookie 用来在回调端点验证认证结果
    res.setHeader(
      "Set-Cookie",
      `${this.options.cookieKey}=${base64url.encode(
        JSON.stringify(tx)
      )}; HttpOnly; SameSite=Lax`
    );

    res.writeHead(302).end();
  }

  /**
   * 在应用回调端点处理认证返回结果，利用 Cookie 中传递的上下文信息进行安全验证，并获取用户登录态
   *
   * @param req http 请求对象，用于获取认证结果和上下文 Cookie
   * @param res http 响应对象，只用于清除上下文 Cookie
   */
  public async handleRedirectCallback(
    req: IncomingMessage,
    res: ServerResponse
  ): Promise<OIDCTokenResponse> {
    if (!req.url) {
      throw new Error("req 对象没有 url");
    }

    const url = new URL(req.url, "http://dummy");
    const error = url.searchParams.get("error");
    if (error) {
      throw new Error(
        `认证服务器返回错误 ${error}: ${url.searchParams.get(
          "error_description"
        )}`
      );
    }

    const code = url.searchParams.get("code");
    if (!code) {
      throw new Error("认证服务器未返回授权码");
    }

    const cookieKey = `${this.options.cookieKey}=`;
    const txStr = (req.headers["cookie"] ?? req.headers["Cookie"])
      ?.toString()
      .split("; ")
      .find((item) => item.startsWith(cookieKey))
      ?.substring(cookieKey.length);

    if (!txStr) {
      throw new Error("Cookie 中没有中间态，认证失败");
    }

    const tx: LoginTransaction = JSON.parse(base64url.decode(txStr));
    // 清除中间态 cookie
    res.setHeader(
      "Set-Cookie",
      `${this.options.cookieKey}=; HttpOnly; SameSite=Lax; Max-Age=0`
    );

    const state = url.searchParams.get("state");
    if (state !== tx.state) {
      throw new Error("state 验证失败");
    }

    const loginState = await this.getAccessTokenByCode(code);
    return loginState;
  }

  /**
   * @description 当用户完成登录之后，保存用户的 Access Token，后续请求会带上此 token
   *
   */
  public setAccessToken(accessToken: string) {
    this.options.accessToken = accessToken;
  }

  private _generateTokenRequest(params: { [x: string]: string }) {
    let ret: any = {};
    // 删掉所有 undefined 的 kv
    Object.keys(params).map((key) => {
      if (typeof params[key] !== "undefined") {
        ret[key] = params[key];
      }
    });
    let p = new URLSearchParams(ret);
    return p.toString();
  }

  /**
   * @param {string} code 授权码 code
   * @param {string} codeVerifier 校验码 codeVerifier
   */
  private async _getAccessTokenByCodeWithClientSecretPost(
    code: string,
    codeVerifier?: string
  ) {
    const qstr = this._generateTokenRequest({
      client_id: this.options.appId,
      client_secret: this.options.appSecret,
      grant_type: "authorization_code",
      code,
      redirect_uri: this.options.redirectUri,
      code_verifier: codeVerifier!,
    });
    let api = "";
    if (this.options.protocol === "oidc") {
      api = `/oidc/token`;
    } else if (this.options.protocol === "oauth") {
      api = `/oauth/token`;
    }
    let tokenSet = await this.httpClient.request({
      method: "POST",
      url: api,
      data: qstr,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return tokenSet;
  }

  private _generateBasicAuthToken(appId?: string, secret?: string) {
    let id = appId || this.options.appId;
    let s = secret || this.options.appSecret;
    let token = "Basic " + Buffer.from(id + ":" + s).toString("base64");
    return token;
  }
  /**
   * @param {string} code 授权码 code
   * @param {string} codeVerifier 校验码 codeVerifier
   */
  private async _getAccessTokenByCodeWithClientSecretBasic(
    code: string,
    codeVerifier?: string
  ) {
    let api = "";
    if (this.options.protocol === "oidc") {
      api = `/oidc/token`;
    } else if (this.options.protocol === "oauth") {
      api = `/oauth/token`;
    }
    const qstr = this._generateTokenRequest({
      grant_type: "authorization_code",
      code,
      redirect_uri: this.options.redirectUri,
      code_verifier: codeVerifier!,
    });
    let tokenSet = await this.httpClient.request({
      data: qstr,
      method: "POST",
      url: api,
      headers: {
        Authorization: this._generateBasicAuthToken(),
      },
    });
    return tokenSet;
  }
  /**
   * @param {string} code 授权码 code
   * @param {string} codeVerifier 校验码 codeVerifier
   */
  private async _getAccessTokenByCodeWithNone(
    code: string,
    codeVerifier?: string
  ) {
    let api = "";
    if (this.options.protocol === "oidc") {
      api = `/oidc/token`;
    } else if (this.options.protocol === "oauth") {
      api = `/oauth/token`;
    }
    const qstr = this._generateTokenRequest({
      client_id: this.options.appId,
      grant_type: "authorization_code",
      code,
      redirect_uri: this.options.redirectUri,
      code_verifier: codeVerifier!,
    });
    let tokenSet = await this.httpClient.request({
      method: "POST",
      url: api,
      data: qstr,
    });
    return tokenSet;
  }

  /**
   * 使用授权码 Code 获取用户的 Token 信息。
   *
   * @param code 授权码 Code，用户在认证成功后，Authing 会将授权码 Code 发送到回调地址，详情请见使用 OIDC 授权码模式，每个 Code 只能使用一次。
   * @param options.codeVerifier 校验码原始值，不是摘要值。
   * @returns
   */
  public async getAccessTokenByCode(
    code: string,
    options?: { codeVerifier?: string }
  ): Promise<OIDCTokenResponse> {
    if (!["oauth", "oidc"].includes(this.options.protocol)) {
      throw new Error(
        "初始化 AuthenticationClient 时传入的 protocol 参数必须为 oauth 或 oidc，请检查参数"
      );
    }
    if (
      !this.options.appSecret &&
      this.options.tokenEndPointAuthMethod !== "none"
    ) {
      throw new Error(
        "请在初始化 AuthenticationClient 时传入 appId 和 secret 参数"
      );
    }
    if (this.options.tokenEndPointAuthMethod === "client_secret_post") {
      return await this._getAccessTokenByCodeWithClientSecretPost(
        code,
        options?.codeVerifier
      );
    }
    if (this.options.tokenEndPointAuthMethod === "client_secret_basic") {
      return await this._getAccessTokenByCodeWithClientSecretBasic(
        code,
        options?.codeVerifier
      );
    }
    if (this.options.tokenEndPointAuthMethod === "none") {
      return await this._getAccessTokenByCodeWithNone(
        code,
        options?.codeVerifier
      );
    } else {
      throw new Error(
        "不支持的 tokenEndPointAuthMethod: " +
          this.options.tokenEndPointAuthMethod
      );
    }
  }

  /**
   * 使用编程访问账号获取具备权限的 Access Token。
   *
   * @param scope 权限项目，空格分隔的字符串，每一项代表一个权限。详情请见机器间（M2M）授权。
   * @param options.accessKey 编程访问账号 AccessKey，如果不传默认使用初始化 SDK 时传入的 appId。
   * @param options.secretKey 编程访问账号 SecretKey，如果不传默认使用初始化 SDK 时传入的 appSecret。
   * @returns
   */
  public async getAccessTokenByClientCredentials(
    scope: string,
    options?: {
      accessKey: string;
      accessSecret: string;
    }
  ) {
    if (!scope) {
      throw new Error(
        "请传入 scope 参数，请看文档：https://docs.authing.cn/v2/guides/authorization/m2m-authz.html"
      );
    }
    if (!options) {
      throw new Error(
        "请在调用本方法时传入 { accessKey: string, accessSecret: string }，请看文档：https://docs.authing.cn/v2/guides/authorization/m2m-authz.html"
        // '请在初始化 AuthenticationClient 时传入 appId 和 secret 参数或者在调用本方法时传入 { accessKey: string, accessSecret: string }，请看文档：https://docs.authing.cn/v2/guides/authorization/m2m-authz.html'
      );
    }
    let i = options?.accessKey || this.options.appId;
    let s = options?.accessSecret || this.options.appSecret;
    const qstr = this._generateTokenRequest({
      client_id: i,
      client_secret: s,
      grant_type: "client_credentials",
      scope: scope,
    });
    let api = "";
    if (this.options.protocol === "oidc") {
      api = `/oidc/token`;
    } else if (this.options.protocol === "oauth") {
      api = `/oauth/token`;
    }
    let tokenSet = await this.httpClient.request({
      method: "POST",
      url: api,
      data: qstr,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return tokenSet;
  }

  /**
   * 使用 Access token 获取用户信息。
   *
   * @param accessToken Access token，使用授权码 Code 换取的 Access token 的内容。
   * @param options
   * @returns
   */
  public async getUserInfoByAccessToken(
    accessToken: string,
    options?: {
      method?: "POST" | "GET";
      tokenPlace?: "query" | "header" | "body";
    }
  ) {
    if (options) {
      if (options.method && !["POST", "GET"].includes(options.method)) {
        throw new Error("options.method 参数的可选值为 POST、GET，请检查输入");
      }
      if (
        options.tokenPlace &&
        !["query", "header", "body"].includes(options.tokenPlace)
      ) {
        throw new Error(
          "options.tokenPlace 参数的可选值为 query、header、body，请检查输入"
        );
      }
      if (options.method === "GET" && options.tokenPlace === "body") {
        throw new Error(
          "options.method 参数为 GET 时，options.tokenPlace 参数不能为 body"
        );
      }
      options.method = options.method || "GET";
      options.tokenPlace = options.tokenPlace || "query";
    }
    let api = "";
    if (this.options.protocol === "oidc") {
      api = `/oidc/me`;
    } else if (this.options.protocol === "oauth") {
      api = `/oauth/me`;
    }
    if (options?.method === "POST") {
      if (options?.tokenPlace === "header") {
        let userInfo = await this.httpClient.request({
          method: "POST",
          url: api,
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        });
        return userInfo;
      } else if (options?.tokenPlace === "query") {
        let userInfo = await this.httpClient.request({
          method: "POST",
          url: api,
          params: {
            access_token: accessToken,
          },
        });
        return userInfo;
      } else if (options?.tokenPlace === "body") {
        let userInfo = await this.httpClient.request({
          method: "POST",
          url: api,
          data: serialize({
            access_token: accessToken,
          }),
        });
        return userInfo;
      }
    } else if (options?.method === "GET") {
      if (options?.tokenPlace === "header") {
        let userInfo = await this.httpClient.request({
          method: "GET",
          url: api,
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        });
        return userInfo;
      } else if (options?.tokenPlace === "query") {
        let userInfo = await this.httpClient.request({
          method: "GET",
          url: api,
          params: {
            access_token: accessToken,
          },
        });
        return userInfo;
      }
    } else {
      // 默认使用 GET + query 获取用户信息
      let userInfo = await this.httpClient.request({
        method: "GET",
        url: api,
        params: {
          access_token: accessToken,
        },
      });
      return userInfo;
    }
  }

  /**
   * 生成 OIDC/OAuth/CAS/SAML 协议的用户登录链接，用户可以通过此链接访问 Authing 的在线登录页面。
   *
   */
  public buildAuthorizeUrl(
    options?: OidcParams | OauthParams | CasParams
  ): AuthUrlResult {
    if (!this.options.appHost) {
      throw new Error(
        "请在初始化 AuthenticationClient 时传入应用域名 appHost 参数，形如：https://app1.authing.cn"
      );
    }
    if (this.options.protocol === "oidc") {
      return this._buildOidcAuthorizeUrl(options as OidcParams);
    }
    if (this.options.protocol === "oauth") {
      const url = this._buildOauthAuthorizeUrl(options as OauthParams);
      return {
        url,
        state: (options as OauthParams)?.state,
      };
    }
    if (this.options.protocol === "saml") {
      const url = this._buildSamlAuthorizeUrl();
      return {
        url,
        state: (options as OauthParams)?.state,
      };
    }
    if (this.options.protocol === "cas") {
      const url = this._buildCasAuthorizeUrl(options as CasParams);
      return {
        url,
      };
    }
    throw new Error(
      "不支持的协议类型，请在初始化 AuthenticationClient 时传入 protocol 参数，可选值为 oidc、oauth、saml、cas"
    );
  }

  private _buildOidcAuthorizeUrl(options?: OidcParams) {
    const state = options?.state ?? generateRandomString(16);
    const nonce = options?.nonce ?? generateRandomString(16);
    const scope = options?.scope ?? this.options.scope;

    const params: AuthURLParams = {
      redirect_uri: options?.redirectUri ?? this.options.redirectUri,
      response_mode: "query",
      response_type: "code",
      client_id: this.options.appId,
      scope,
      state,
      nonce,
    };
    if (options?.forced) {
      params.prompt = "login";
    } else if (scope.split(" ").includes("offline_access")) {
      params.prompt = "consent";
    }

    return {
      url: `${this.options.appHost}/oidc/auth?${createQueryParams(params)}`,
      state,
      nonce,
    };
  }

  private _buildOauthAuthorizeUrl(options: OauthParams) {
    let map: any = {
      appId: "client_id",
      scope: "scope",
      state: "state",
      responseType: "response_type",
      redirectUri: "redirect_uri",
    };
    let res: any = {
      state: Math.random().toString().slice(2),
      scope: "user",
      client_id: this.options.appId,
      redirect_uri: this.options.redirectUri,
      response_type: "code",
    };
    Object.keys(map).forEach((k) => {
      if (options && (options as any)[k]) {
        res[map[k]] = (options as any)[k];
      }
    });
    let params = new URLSearchParams(res);
    let authorizeUrl =
      this.options.appHost + "/oauth/auth?" + params.toString();
    return authorizeUrl;
  }

  private _buildSamlAuthorizeUrl() {
    return this.options.appHost + "/api/v2/saml-idp/" + this.options.appId;
  }
  private _buildCasAuthorizeUrl(options: CasParams) {
    if (options?.service) {
      return `${this.options.appHost}/cas-idp/${this.options.appId}?service=${options?.service}`;
    }
    return `${this.options.appHost}/cas-idp/${this.options.appId}`;
  }
  private _buildCasLogoutUrl(options: LogoutParams) {
    if (options?.redirectUri) {
      return (
        this.options.appHost + "/cas-idp/logout?url=" + options.redirectUri
      );
    }
    return `${this.options.appHost}/cas-idp/logout`;
  }

  private _buildOidcLogoutUrl(options: LogoutParams): string {
    const redirectUri = options.redirectUri ?? this.options.logoutRedirectUri;
    const params: LogoutURLParams = {
      ...(redirectUri && {
        post_logout_redirect_uri: redirectUri,
        state: options.state,
      }),
      id_token_hint: options.idToken,
    };
    return `${this.options.appHost}/oidc/session/end?${createQueryParams(
      params
    )}`;
  }

  private _buildEasyLogoutUrl(options?: LogoutParams) {
    if (options?.redirectUri) {
      return `${this.options.appHost}/login/profile/logout?redirect_uri=${options.redirectUri}`;
    }
    return `${this.options.appHost}/login/profile/logout`;
  }

  /**
   * 拼接 CAS/OIDC 协议的登出 URL
   *
   */
  public buildLogoutUrl(options?: LogoutParams) {
    if (this.options.protocol === "cas") {
      return this._buildCasLogoutUrl(options!);
    }
    if (this.options.protocol === "oidc") {
      return this._buildOidcLogoutUrl(options!);
    } else {
      throw this._buildEasyLogoutUrl(options!);
    }
  }

  private async _getNewAccessTokenByRefreshTokenWithClientSecretPost(
    refreshToken: string
  ) {
    const qstr = this._generateTokenRequest({
      client_id: this.options.appId,
      client_secret: this.options.appSecret,
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    });
    let api = "";
    if (this.options.protocol === "oidc") {
      api = `/oidc/token`;
    } else if (this.options.protocol === "oauth") {
      api = `/oauth/token`;
    }
    let tokenSet = await this.httpClient.request({
      method: "POST",
      url: api,
      data: qstr,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return tokenSet;
  }

  private async _getNewAccessTokenByRefreshTokenWithClientSecretBasic(
    refreshToken: string
  ) {
    let api = "";
    if (this.options.protocol === "oidc") {
      api = `/oidc/token`;
    } else if (this.options.protocol === "oauth") {
      api = `/oauth/token`;
    }
    const qstr = this._generateTokenRequest({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    });
    let tokenSet = await this.httpClient.request({
      data: qstr,
      method: "POST",
      url: api,
      headers: {
        Authorization: this._generateBasicAuthToken(),
      },
    });
    return tokenSet;
  }

  private async _getNewAccessTokenByRefreshTokenWithNone(refreshToken: string) {
    let api = "";
    if (this.options.protocol === "oidc") {
      api = `${this.options.appHost}/oidc/token`;
    } else if (this.options.protocol === "oauth") {
      api = `${this.options.appHost}/oauth/token`;
    }
    const qstr = this._generateTokenRequest({
      client_id: this.options.appId,
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    });
    let tokenSet = await this.httpClient.request({
      method: "POST",
      url: api,
      data: qstr,
    });
    return tokenSet;
  }

  /**
   * 使用 Refresh token 获取新的 Access token。
   * @param refreshToken Refresh token，可以从 AuthenticationClient.getAccessTokenByCode 方法的返回值中的 refresh_token 获得。
   * @returns
   */
  public async getNewAccessTokenByRefreshToken(refreshToken: string) {
    if (!["oauth", "oidc"].includes(this.options.protocol)) {
      throw new Error(
        "初始化 AuthenticationClient 时传入的 protocol 参数必须为 oauth 或 oidc，请检查参数"
      );
    }
    if (
      !this.options.appSecret &&
      this.options.tokenEndPointAuthMethod !== "none"
    ) {
      throw new Error(
        "请在初始化 AuthenticationClient 时传入 appId 和 secret 参数"
      );
    }
    if (this.options.tokenEndPointAuthMethod === "client_secret_post") {
      return await this._getNewAccessTokenByRefreshTokenWithClientSecretPost(
        refreshToken
      );
    }
    if (this.options.tokenEndPointAuthMethod === "client_secret_basic") {
      return await this._getNewAccessTokenByRefreshTokenWithClientSecretBasic(
        refreshToken
      );
    }
    if (this.options.tokenEndPointAuthMethod === "none") {
      return await this._getNewAccessTokenByRefreshTokenWithNone(refreshToken);
    }
  }

  private async _revokeTokenWithClientSecretPost(token: string) {
    const qstr = this._generateTokenRequest({
      client_id: this.options.appId,
      client_secret: this.options.appSecret,
      token,
    });
    let api = "";
    if (this.options.protocol === "oidc") {
      api = `/oidc/token/revocation`;
    } else if (this.options.protocol === "oauth") {
      api = `/oauth/token/revocation`;
    }
    let tokenSet = await this.httpClient.request({
      method: "POST",
      url: api,
      data: qstr,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return tokenSet;
  }

  private async _revokeTokenWithClientSecretBasic(token: string) {
    let api = "";
    if (this.options.protocol === "oidc") {
      api = `/oidc/token/revocation`;
    } else if (this.options.protocol === "oauth") {
      throw new Error(
        "OAuth 2.0 暂不支持用 client_secret_basic 模式身份验证撤回 Token"
      );
    }
    const qstr = this._generateTokenRequest({
      token: token,
    });
    let result = await this.httpClient.request({
      data: qstr,
      method: "POST",
      url: api,
      headers: {
        Authorization: this._generateBasicAuthToken(),
      },
    });
    return result;
  }
  private async _revokeTokenWithNone(token: string) {
    let api = "";
    if (this.options.protocol === "oidc") {
      api = `/oidc/token/revocation`;
    } else if (this.options.protocol === "oauth") {
      api = `/oauth/token/revocation`;
    }
    const qstr = this._generateTokenRequest({
      client_id: this.options.appId,
      token: token,
    });
    let result = await this.httpClient.request({
      method: "POST",
      url: api,
      data: qstr,
    });
    return result;
  }

  /**
   * 撤回 Access token 或 Refresh token。Access token 或 Refresh token 的持有者可以通知 Authing 已经不再需要令牌，希望 Authing 将其吊销。
   * @param token Access token 或 Refresh token，可以从 AuthenticationClient.getAccessTokenByCode 方法的返回值中的 access_token、refresh_token 获得。
   * @returns
   */
  public async revokeToken(token: string) {
    if (!["oauth", "oidc"].includes(this.options.protocol)) {
      throw new Error(
        "初始化 AuthenticationClient 时传入的 protocol 参数必须为 oauth 或 oidc，请检查参数"
      );
    }
    if (
      !this.options.appSecret &&
      this.options.revocationEndPointAuthMethod !== "none"
    ) {
      throw new Error(
        "请在初始化 AuthenticationClient 时传入 appId 和 secret 参数"
      );
    }
    if (this.options.revocationEndPointAuthMethod === "client_secret_post") {
      await this._revokeTokenWithClientSecretPost(token);
      return true;
    }
    if (this.options.revocationEndPointAuthMethod === "client_secret_basic") {
      await this._revokeTokenWithClientSecretBasic(token);
      return true;
    }
    if (this.options.revocationEndPointAuthMethod === "none") {
      await this._revokeTokenWithNone(token);
      return true;
    }
    throw new Error(
      "初始化 AuthenticationClient 时传入的 revocationEndPointAuthMethod 参数可选值为 client_secret_base、client_secret_post、none，请检查参数"
    );
  }

  private async _introspectTokenWithClientSecretPost(token: string) {
    const qstr = this._generateTokenRequest({
      client_id: this.options.appId,
      client_secret: this.options.appSecret,
      token,
    });
    let api = "";
    if (this.options.protocol === "oidc") {
      api = `/oidc/token/introspection`;
    } else if (this.options.protocol === "oauth") {
      api = `/oauth/token/introspection`;
    }
    let tokenSet = await this.httpClient.request({
      method: "POST",
      url: api,
      data: qstr,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return tokenSet;
  }

  private async _introspectTokenWithClientSecretBasic(token: string) {
    let api = "";
    if (this.options.protocol === "oidc") {
      api = `/oidc/token/introspection`;
    } else if (this.options.protocol === "oauth") {
      api = `/oauth/token/introspection`;
    }
    const qstr = this._generateTokenRequest({
      token: token,
    });
    let result = await this.httpClient.request({
      data: qstr,
      method: "POST",
      url: api,
      headers: {
        Authorization: this._generateBasicAuthToken(),
      },
    });
    return result;
  }
  private async _introspectTokenWithNone(token: string) {
    let api = "";
    if (this.options.protocol === "oidc") {
      api = `/oidc/token/introspection`;
    } else if (this.options.protocol === "oauth") {
      api = `/oauth/token/introspection`;
    }
    const qstr = this._generateTokenRequest({
      client_id: this.options.appId,
      token: token,
    });
    let result = await this.httpClient.request({
      method: "POST",
      url: api,
      data: qstr,
    });
    return result;
  }

  /**
   * @param token: Access token 或 Refresh token，可以从 AuthenticationClient.getAccessTokenByCode 方法的返回值中的 access_token、refresh_token 获得。
   *
   */
  public async introspectToken(token: string) {
    if (!["oauth", "oidc"].includes(this.options.protocol)) {
      throw new Error(
        "初始化 AuthenticationClient 时传入的 protocol 参数必须为 oauth 或 oidc，请检查参数"
      );
    }
    if (
      !this.options.appSecret &&
      this.options.introspectionEndPointAuthMethod !== "none"
    ) {
      throw new Error(
        "请在初始化 AuthenticationClient 时传入 appId 和 secret 参数"
      );
    }
    if (this.options.introspectionEndPointAuthMethod === "client_secret_post") {
      return await this._introspectTokenWithClientSecretPost(token);
    }
    if (
      this.options.introspectionEndPointAuthMethod === "client_secret_basic"
    ) {
      return await this._introspectTokenWithClientSecretBasic(token);
    }
    if (this.options.introspectionEndPointAuthMethod === "none") {
      return await this._introspectTokenWithNone(token);
    }
    throw new Error(
      "初始化 AuthenticationClient 时传入的 introspectionEndPointAuthMethod 参数可选值为 client_secret_base、client_secret_post、none，请检查参数"
    );
  }

  /**
   * 检验 CAS 1.0 Ticket 合法性。
   * @param ticket CAS 认证成功后，Authing 颁发的 ticket。
   * @param service CAS 回调地址。
   * @returns
   */
  public async validateTicketV1(ticket: string, service: string) {
    const api = `/cas-idp/${this.options.appId}/validate`;
    let result = await this.httpClient.request({
      method: "GET",
      url: api,
      params: {
        service,
        ticket,
      },
    });
    const [valid] = result.split("\n");
    return {
      valid: valid === "yes",
      ...(valid !== "yes" && { message: "ticket 不合法" }),
    };
  }

  /**
   * 检验 CAS 2.0 Ticket 合法性，同时返回用户属性，数据格式默认为 JSON，可以选择 XML。
   *
   * @param ticket CAS 认证成功后，Authing 颁发的 ticket。
   * @param service CAS 回调地址。
   * @param format 返回数据格式，可选值为 XML、JSON，默认为 JSON。
   * @returns
   */
  public async validateTicketV2(
    ticket: string,
    service: string,
    format: "XML" | "JSON" = "JSON"
  ): Promise<
    Cas20ValidationSuccessResult | Cas20ValidationFailureResult | string
  > {
    if (!ticket) {
      throw new Error("请传入 ticket 一次性票据");
    }
    if (!service) {
      throw new Error("请传入 service 服务地址");
    }
    if (format !== "XML" && format !== "JSON") {
      throw new Error("format 参数可选值为 XML、JSON，请检查输入");
    }
    const api = `/cas-idp/${this.options.appId}/serviceValidate`;
    let result = await this.httpClient.request({
      method: "GET",
      url: api,
      params: {
        service,
        ticket,
        format,
      },
    });
    return result;
  }

  /**
   * 生成 PKCE 校验码
   */
  public generateCodeChallenge() {
    return generateRandomString(43);
  }

  /**
   * 生成 PKCE 校验码摘要值
   */
  public getCodeChallengeDigest(options: {
    codeChallenge: string;
    method: "S256" | "plain";
  }) {
    if (!options) {
      throw new Error(
        "请提供 options 参数，options.codeChallenge 为一个长度大于等于 43 的字符串，options.method 可选值为 S256、plain"
      );
    }
    if (!options.codeChallenge) {
      throw new Error(
        "请提供 options.codeChallenge，值为一个长度大于等于 43 的字符串"
      );
    }
    const { method = "S256" } = options;
    if (method === "S256") {
      // url safe base64
      return sha256(options.codeChallenge)
        .toString(CryptoJS.enc.Base64)
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=/g, "");
    }
    if (method === "plain") {
      return options.codeChallenge;
    }
    throw new Error("不支持的 options.method，可选值为 S256、plain");
  }

  private async fetchJWKS(options?: {
    /**
     * 服务端的 JWKS 公钥，用于验证 Token 签名，默认会通过网络请求从服务端的 JWKS 端点自动获取
     */
    serverJWKS?: JWKSObject;
  }) {
    if (options?.serverJWKS) {
      return await parseJWKS(options.serverJWKS);
    } else {
      const keys = await this.httpClient.request({
        method: "GET",
        url: "/oidc/.well-known/jwks.json",
      });
      return await parseJWKS(keys);
    }
  }

  /**
   * 验证并解析 Access Token
   *
   * @param token Access Token
   */
  public async parseAccessToken(
    token: string,
    options?: {
      /**
       * 服务端的 JWKS 公钥，用于验证 Token 签名，默认会通过网络请求从服务端的 JWKS 端点自动获取
       */
      serverJWKS?: JWKSObject;
    }
  ): Promise<AccessToken> {
    const jwks: JoseKey[] = await this.fetchJWKS(options);
    const { payload } = await compactVerify(
      token,
      (h, _t) => (jwks.find((k) => h.kid === k.id) ?? jwks[0]).key
    );
    return JSON.parse(new TextDecoder().decode(payload)) as AccessToken;
  }

  /**
   * 验证并解析 ID Token
   *
   * @param token ID Token
   */
  public async parseIDToken(
    token: string,
    options?: {
      /**
       * 服务端的 JWKS 公钥，用于验证 Token 签名，默认会通过网络请求从服务端的 JWKS 端点自动获取
       */
      serverJWKS?: JWKSObject;
    }
  ): Promise<IDToken> {
    const jwks: JoseKey[] = await this.fetchJWKS(options);
    const { payload } = await compactVerify(token, (h, _t) => {
      if (h.alg === "HS256") {
        return createSecretKey(Buffer.from(this.options.appSecret));
      }
      return (jwks.find((k) => h.kid === k.id) ?? jwks[0]).key;
    });
    return JSON.parse(new TextDecoder().decode(payload)) as IDToken;
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
  public async logoutWithRedirect(
    res: ServerResponse,
    options?: LogoutParams
  ): Promise<void> {
    res.setHeader("Location", this.buildLogoutUrl(options)!).writeHead(302);
  }

  // ==== 基于 signInByCredentials 封装的登录方式 BEGIN

  /**
   * 使用邮箱 + 密码登录
   *
   */
  public async signInByEmailPassword(requestBody: {
    email: string;
    password: string;
    options?: SignInOptionsDto;
  }) {
    const { email, password, options } = requestBody;
    const { tokenEndPointAuthMethod } = this.options;
    let dto: SigninByCredentialsDto = {
      connection: SigninByCredentialsDto.connection.PASSWORD,
      passwordPayload: {
        password,
        email,
      },
      options,
    };
    if (tokenEndPointAuthMethod === "client_secret_post") {
      dto.client_id = this.options.appId;
      dto.client_secret = this.options.appSecret;
    }

    return await this.signInByCredentials(dto);
  }

  /**
   * 使用手机号 + 密码登录
   *
   */
  public async signInByPhonePassword(requestBody: {
    phone: string;
    password: string;
    options?: SignInOptionsDto;
  }) {
    const { password, phone, options } = requestBody;
    const { tokenEndPointAuthMethod } = this.options;
    let dto: SigninByCredentialsDto = {
      connection: SigninByCredentialsDto.connection.PASSWORD,
      passwordPayload: {
        password,
        phone,
      },
      options,
    };
    if (tokenEndPointAuthMethod === "client_secret_post") {
      dto.client_id = this.options.appId;
      dto.client_secret = this.options.appSecret;
    }

    return await this.signInByCredentials(dto);
  }

  /**
   * 使用用户名 + 密码登录
   *
   */
  public async signInByUsernamePassword(requestBody: {
    username: string;
    password: string;
    options?: SignInOptionsDto;
  }) {
    const { password, username, options } = requestBody;
    const { tokenEndPointAuthMethod } = this.options;
    let dto: SigninByCredentialsDto = {
      connection: SigninByCredentialsDto.connection.PASSWORD,
      passwordPayload: {
        password,
        username,
      },
      options,
    };
    if (tokenEndPointAuthMethod === "client_secret_post") {
      dto.client_id = this.options.appId;
      dto.client_secret = this.options.appSecret;
    }

    return await this.signInByCredentials(dto);
  }

  /**
   * 使用账号（用户名/手机号/邮箱） + 密码登录
   *
   */
  public async signInByAccountPassword(requestBody: {
    account: string;
    password: string;
    options?: SignInOptionsDto;
  }) {
    const { account, password, options } = requestBody;
    const { tokenEndPointAuthMethod } = this.options;
    let dto: SigninByCredentialsDto = {
      connection: SigninByCredentialsDto.connection.PASSWORD,
      passwordPayload: {
        password,
        account,
      },
      options,
    };
    if (tokenEndPointAuthMethod === "client_secret_post") {
      dto.client_id = this.options.appId;
      dto.client_secret = this.options.appSecret;
    }

    return await this.signInByCredentials(dto);
  }

  /**
   * 使用邮箱 + 验证码登录
   *
   */
  public async signInByEmailPassCode(requestBody: {
    email: string;
    passCode: string;
    options?: SignInOptionsDto;
  }) {
    const { email, passCode, options } = requestBody;
    const { tokenEndPointAuthMethod } = this.options;
    let dto: SigninByCredentialsDto = {
      connection: SigninByCredentialsDto.connection.PASSCODE,
      passCodePayload: {
        email,
        passCode,
      },
      options,
    };
    if (tokenEndPointAuthMethod === "client_secret_post") {
      dto.client_id = this.options.appId;
      dto.client_secret = this.options.appSecret;
    }

    return await this.signInByCredentials(dto);
  }

  /**
   * 使用手机号 + 验证码登录
   *
   */
  public async signInByPhonePassCode(requestBody: {
    phone: string;
    phoneCountryCode?: string;
    passCode: string;
    options?: SignInOptionsDto;
  }) {
    const { phone, phoneCountryCode, passCode, options } = requestBody;
    const { tokenEndPointAuthMethod } = this.options;
    let dto: SigninByCredentialsDto = {
      connection: SigninByCredentialsDto.connection.PASSCODE,
      passCodePayload: {
        phone,
        phoneCountryCode,
        passCode,
      },
      options,
    };
    if (tokenEndPointAuthMethod === "client_secret_post") {
      dto.client_id = this.options.appId;
      dto.client_secret = this.options.appSecret;
    }

    return await this.signInByCredentials(dto);
  }

  /**
   * 使用 AD 账号密码登录
   *
   */
  public async signInByLdap(requestBody: {
    /**
     * 用户密码，默认不加密。Authing 所有 API 均通过 HTTPS 协议对密码进行安全传输，可以在一定程度上保证安全性。
     * 如果你还需要更高级别的安全性，我们还支持 `RSA256` 和国密 `SM2` 的密码加密方式。详情见可选参数 `options.passwordEncryptType`。
     *
     */
    password: string;
    /**
     * Windows AD 用户目录中账号的 sAMAccountName
     */
    sAMAccountName: string;
    options?: SignInOptionsDto;
  }) {
    const { password, sAMAccountName, options } = requestBody;
    const { tokenEndPointAuthMethod } = this.options;
    let dto: SigninByCredentialsDto = {
      connection: SigninByCredentialsDto.connection.AD,
      adPayload: {
        sAMAccountName,
        password,
      },
      options,
    };
    if (tokenEndPointAuthMethod === "client_secret_post") {
      dto.client_id = this.options.appId;
      dto.client_secret = this.options.appSecret;
    }

    return await this.signInByCredentials(dto);
  }

  /**
   * 使用 AD 账号密码登录
   *
   */
  public async signInByLDAP(requestBody: {
    /**
     * 用户密码，默认不加密。Authing 所有 API 均通过 HTTPS 协议对密码进行安全传输，可以在一定程度上保证安全性。
     * 如果你还需要更高级别的安全性，我们还支持 `RSA256` 和国密 `SM2` 的密码加密方式。详情见可选参数 `options.passwordEncryptType`。
     *
     */
    password: string;
    /**
     * LDAP AD 用户目录中账号的 sAMAccountName
     */
    sAMAccountName: string;
    options?: SignInOptionsDto;
  }) {
    const { password, sAMAccountName, options } = requestBody;
    const { tokenEndPointAuthMethod } = this.options;
    let dto: SigninByCredentialsDto = {
      connection: SigninByCredentialsDto.connection.LDAP,
      ldapPayload: {
        password,
        sAMAccountName,
      },
      options,
    };
    if (tokenEndPointAuthMethod === "client_secret_post") {
      dto.client_id = this.options.appId;
      dto.client_secret = this.options.appSecret;
    }

    return await this.signInByCredentials(dto);
  }

  // ==== 基于 signInByCredentials 封装的登录方式 END

  // ==== AUTO GENERATED AUTHENTICATION METHODS BEGIN ====
  /**
   * @summary 发起绑定 MFA 认证要素请求
   * @description 当用户未绑定某个 MFA 认证要素时，可以发起绑定 MFA 认证要素请求。不同类型的 MFA 认证要素绑定请求需要发送不同的参数，详细见 profile 参数。发起验证请求之后，Authing 服务器会根据相应的认证要素类型和传递的参数，使用不同的手段要求验证。此接口会返回 enrollmentToken，你需要在请求「绑定 MFA 认证要素」接口时带上此 enrollmentToken，并提供相应的凭证。
   * @returns SendEnrollFactorRequestRespDto
   */
  public async sendEnrollFactorRequest(
    requestBody: SendEnrollFactorRequestDto
  ): Promise<SendEnrollFactorRequestRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/send-enroll-factor-request",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary 绑定 MFA 认证要素
   * @description 绑定 MFA 要素
   * @returns EnrollFactorRespDto
   */
  public async enrollFactor(
    requestBody: EnrollFactorDto
  ): Promise<EnrollFactorRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/enroll-factor",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary 解绑 MFA 认证要素
   * @description 当前不支持通过此接口解绑短信、邮箱验证码类型的认证要素。如果需要，请调用「解绑邮箱」和「解绑手机号」接口。
   * @returns ResetFactorRespDto
   */
  public async resetFactor(
    requestBody: RestFactorDto
  ): Promise<ResetFactorRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/reset-factor",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary 获取绑定的所有 MFA 认证要素
   * @description Authing 目前支持四种类型的 MFA 认证要素：手机短信、邮件验证码、OTP、人脸。如果用户绑定了手机号 / 邮箱之后，默认就具备了手机短信、邮箱验证码的 MFA 认证要素。
   * @returns ListEnrolledFactorsRespDto
   */
  public async listEnrolledFactors(): Promise<ListEnrolledFactorsRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/list-enrolled-factors",
    });
    return result;
  }
  /**
   * @summary 获取绑定的某个 MFA 认证要素
   * @description 根据 Factor ID 获取用户绑定的某个 MFA Factor 详情。
   * @returns GetFactorRespDto
   */
  public async getFactor({
    factorId,
  }: {
    /** MFA Factor ID **/
    factorId: string;
  }): Promise<GetFactorRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-factor",
      params: {
        factorId: factorId,
      },
    });
    return result;
  }
  /**
   * @summary 获取可绑定的 MFA 认证要素
   * @description 获取所有应用已经开启、用户暂未绑定的 MFA 认证要素，用户可以从返回的列表中绑定新的 MFA 认证要素。
   * @returns ListFactorsToEnrollRespDto
   */
  public async listFactorsToEnroll(): Promise<ListFactorsToEnrollRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/list-factors-to-enroll",
    });
    return result;
  }
  /**
   * @summary 绑定外部身份源
   * @description
   *
   * 由于绝大多数的外部身份源登录不允许在第三方系统直接输入账号密码进行登录，所以外部身份源的绑定总是需要先跳转到对方的登录页面进行认证。此端点会通过浏览器 `302` 跳转的方式先跳转到第三方的登录页面，
   * 终端用户在第三方系统认证完成之后，浏览器再会跳转到 Authing 服务器，Authing 服务器会将此外部身份源绑定到该用户身上。最终的结果会通过浏览器 Window Post Message 的方式传递给开发者。
   * 你可以在你的应用系统中放置一个按钮，引导用户点击之后，弹出一个 Window Popup，地址为此端点，当用户在第三方身份源认证完成之后，此 Popup 会通过 Window Post Message 的方式传递给父窗口。
   *
   * 为此我们在 `@authing/browser` SDK 中封装了相关方法，为开发者省去了其中大量的细节：
   *
   * ```typescript
   * import { Authing } from "@authing/browser"
   * const sdk = new Authing({
   * // 应用的认证地址，例如：https://domain.authing.cn
   * domain: "",
   *
   * // Authing 应用 ID
   * appId: "you_authing_app_id",
   *
   * // 登录回调地址，需要在控制台『应用配置 - 登录回调 URL』中指定
   * redirectUri: "your_redirect_uri"
   * });
   *
   *
   * // success 表示此次绑定操作是否成功；
   * // errMsg 为如果绑定失败，具体的失败原因，如此身份源已被其他账号绑定等。
   * // identities 为此次绑定操作具体绑定的第三方身份信息
   * const { success, errMsg, identities } = await sdk.bindExtIdpWithPopup({
   * "extIdpConnIdentifier": "my-wechat"
   * })
   *
   * ```
   *
   * 绑定外部身份源成功之后，你可以得到用户在此第三方身份源的信息，以绑定飞书账号为例：
   *
   * ```json
   * [
   * {
   * "identityId": "62f20932xxxxbcc10d966ee5",
   * "extIdpId": "62f209327xxxxcc10d966ee5",
   * "provider": "lark",
   * "type": "open_id",
   * "userIdInIdp": "ou_8bae746eac07cd2564654140d2a9ac61",
   * "originConnIds": ["62f2093244fa5cb19ff21ed3"]
   * },
   * {
   * "identityId": "62f726239xxxxe3285d21c93",
   * "extIdpId": "62f209327xxxxcc10d966ee5",
   * "provider": "lark",
   * "type": "union_id",
   * "userIdInIdp": "on_093ce5023288856aa0abe4099123b18b",
   * "originConnIds": ["62f2093244fa5cb19ff21ed3"]
   * },
   * {
   * "identityId": "62f72623e011cf10c8851e4c",
   * "extIdpId": "62f209327xxxxcc10d966ee5",
   * "provider": "lark",
   * "type": "user_id",
   * "userIdInIdp": "23ded785",
   * "originConnIds": ["62f2093244fa5cb19ff21ed3"]
   * }
   * ]
   * ```
   *
   * 可以看到，我们获取到了用户在飞书中的身份信息：
   *
   * - `open_id`: ou_8bae746eac07cd2564654140d2a9ac61
   * - `union_id`: on_093ce5023288856aa0abe4099123b18b
   * - `user_id`: 23ded785
   *
   * 绑定此外部身份源之后，后续用户就可以使用此身份源进行登录了，见**登录**接口。
   *
   *
   * @returns GenerateBindExtIdpLinkRespDto
   */
  public async linkExtIdp({
    extIdpConnIdentifier,
    appId,
    idToken,
  }: {
    /** 外部身份源连接唯一标志 **/
    extIdpConnIdentifier: string;
    /** Authing 应用 ID **/
    appId: string;
    /** 用户的 id_token **/
    idToken: string;
  }): Promise<GenerateBindExtIdpLinkRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/link-extidp",
      params: {
        ext_idp_conn_identifier: extIdpConnIdentifier,
        app_id: appId,
        id_token: idToken,
      },
    });
    return result;
  }
  /**
   * @summary 生成绑定外部身份源的链接
   * @description
   *
   * 由于绝大多数的外部身份源登录不允许在第三方系统直接输入账号密码进行登录，所以外部身份源的绑定总是需要先跳转到对方的登录页面进行认证。此端点会通过浏览器 `302` 跳转的方式先跳转到第三方的登录页面，
   * 终端用户在第三方系统认证完成之后，浏览器再会跳转到 Authing 服务器，Authing 服务器会将此外部身份源绑定到该用户身上。最终的结果会通过浏览器 Window Post Message 的方式传递给开发者。
   * 你可以在你的应用系统中放置一个按钮，引导用户点击之后，弹出一个 Window Popup，地址为此端点，当用户在第三方身份源认证完成之后，此 Popup 会通过 Window Post Message 的方式传递给父窗口。
   *
   * 为此我们在 `@authing/browser` SDK 中封装了相关方法，为开发者省去了其中大量的细节：
   *
   * ```typescript
   * import { Authing } from "@authing/browser"
   * const sdk = new Authing({
   * // 应用的认证地址，例如：https://domain.authing.cn
   * domain: "",
   *
   * // Authing 应用 ID
   * appId: "you_authing_app_id",
   *
   * // 登录回调地址，需要在控制台『应用配置 - 登录回调 URL』中指定
   * redirectUri: "your_redirect_uri"
   * });
   *
   *
   * // success 表示此次绑定操作是否成功；
   * // errMsg 为如果绑定失败，具体的失败原因，如此身份源已被其他账号绑定等。
   * // identities 为此次绑定操作具体绑定的第三方身份信息
   * const { success, errMsg, identities } = await sdk.bindExtIdpWithPopup({
   * "extIdpConnIdentifier": "my-wechat"
   * })
   *
   * ```
   *
   * 绑定外部身份源成功之后，你可以得到用户在此第三方身份源的信息，以绑定飞书账号为例：
   *
   * ```json
   * [
   * {
   * "identityId": "62f20932xxxxbcc10d966ee5",
   * "extIdpId": "62f209327xxxxcc10d966ee5",
   * "provider": "lark",
   * "type": "open_id",
   * "userIdInIdp": "ou_8bae746eac07cd2564654140d2a9ac61",
   * "originConnIds": ["62f2093244fa5cb19ff21ed3"]
   * },
   * {
   * "identityId": "62f726239xxxxe3285d21c93",
   * "extIdpId": "62f209327xxxxcc10d966ee5",
   * "provider": "lark",
   * "type": "union_id",
   * "userIdInIdp": "on_093ce5023288856aa0abe4099123b18b",
   * "originConnIds": ["62f2093244fa5cb19ff21ed3"]
   * },
   * {
   * "identityId": "62f72623e011cf10c8851e4c",
   * "extIdpId": "62f209327xxxxcc10d966ee5",
   * "provider": "lark",
   * "type": "user_id",
   * "userIdInIdp": "23ded785",
   * "originConnIds": ["62f2093244fa5cb19ff21ed3"]
   * }
   * ]
   * ```
   *
   * 可以看到，我们获取到了用户在飞书中的身份信息：
   *
   * - `open_id`: ou_8bae746eac07cd2564654140d2a9ac61
   * - `union_id`: on_093ce5023288856aa0abe4099123b18b
   * - `user_id`: 23ded785
   *
   * 绑定此外部身份源之后，后续用户就可以使用此身份源进行登录了，见**登录**接口。
   *
   *
   * @returns GenerateBindExtIdpLinkRespDto
   */
  public async generateLinkExtIdpUrl({
    extIdpConnIdentifier,
    appId,
    idToken,
  }: {
    /** 外部身份源连接唯一标志 **/
    extIdpConnIdentifier: string;
    /** Authing 应用 ID **/
    appId: string;
    /** 用户的 id_token **/
    idToken: string;
  }): Promise<GenerateBindExtIdpLinkRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/generate-link-extidp-url",
      params: {
        ext_idp_conn_identifier: extIdpConnIdentifier,
        app_id: appId,
        id_token: idToken,
      },
    });
    return result;
  }
  /**
   * @summary 解绑外部身份源
   * @description 解绑外部身份源，此接口需要传递用户绑定的外部身份源 ID，**注意不是身份源连接 ID**。
   * @returns CommonResponseDto
   */
  public async unbindExtIdp(
    requestBody: UnbindExtIdpDto
  ): Promise<CommonResponseDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/unlink-extidp",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary 获取绑定的外部身份源
   * @description
   * 如在**介绍**部分中所描述的，一个外部身份源对应多个外部身份源连接，用户通过某个外部身份源连接绑定了某个外部身份源账号之后，
   * 用户会建立一条与此外部身份源之间的关联关系。此接口用于获取此用户绑定的所有外部身份源。
   *
   * 取决于外部身份源的具体实现，一个用户在外部身份源中，可能会有多个身份 ID，比如在微信体系中会有 `openid` 和 `unionid`，在非书中有
   * `open_id`、`union_id` 和 `user_id`。在 Authing 中，我们把这样的一条 `open_id` 或者 `unionid_` 叫做一条 `Identity`， 所以用户在一个身份源会有多条 `Identity` 记录。
   *
   * 以微信为例，如果用户使用微信登录或者绑定了微信账号，他的 `Identity` 信息如下所示：
   *
   * ```json
   * [
   * {
   * "identityId": "62f20932xxxxbcc10d966ee5",
   * "extIdpId": "62f209327xxxxcc10d966ee5",
   * "provider": "wechat",
   * "type": "openid",
   * "userIdInIdp": "oH_5k5SflrwjGvk7wqpoBKq_cc6M",
   * "originConnIds": ["62f2093244fa5cb19ff21ed3"]
   * },
   * {
   * "identityId": "62f726239xxxxe3285d21c93",
   * "extIdpId": "62f209327xxxxcc10d966ee5",
   * "provider": "wechat",
   * "type": "unionid",
   * "userIdInIdp": "o9Nka5ibU-lUGQaeAHqu0nOZyJg0",
   * "originConnIds": ["62f2093244fa5cb19ff21ed3"]
   * }
   * ]
   * ```
   *
   *
   * 可以看到他们的 `extIdpId` 是一样的，这个是你在 Authing 中创建的**身份源 ID**；`provider` 都是 `wechat`；
   * 通过 `type` 可以区分出哪个是 `openid`，哪个是 `unionid`，以及具体的值（`userIdInIdp`）；他们都来自于同一个身份源连接（`originConnIds`）。
   *
   *
   *
   * @returns GetIdentitiesRespDto
   */
  public async getIdentities(): Promise<GetIdentitiesRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-identities",
    });
    return result;
  }
  /**
   * @summary 获取应用开启的外部身份源列表
   * @description 获取应用开启的外部身份源列表，前端可以基于此渲染外部身份源按钮。
   * @returns GetExtIdpsRespDto
   */
  public async getExtIdps(): Promise<GetExtIdpsRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-extidps",
    });
    return result;
  }
  /**
   * @summary 注册
   * @description
   * 此端点目前支持以下几种基于的注册方式：
   *
   * 1. 基于密码（PASSWORD）：用户名 + 密码，邮箱 + 密码。
   * 2. 基于一次性临时验证码（PASSCODE）：手机号 + 验证码，邮箱 + 验证码。你需要先调用发送短信或者发送邮件接口获取验证码。
   *
   * 社会化登录等使用外部身份源“注册”请直接使用**登录**接口，我们会在其第一次登录的时候为其创建一个新账号。
   *
   * @returns UserSingleRespDto
   */
  public async signUp(requestBody: SignupDto): Promise<UserSingleRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/signup",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary 解密微信小程序数据
   * @returns any
   */
  public async decryptWechatMiniProgramData(
    requestBody: DecryptWechatMiniProgramDataDto
  ): Promise<any> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/decrypt-wechat-miniprogram-data",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary 获取小程序的手机号
   * @returns any
   */
  public async getWechatMiniprogramPhone(
    requestBody: GetWechatMiniProgramPhoneDto
  ): Promise<any> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/get-wechat-miniprogram-phone",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary 获取 Authing 服务器缓存的微信小程序、公众号 Access Token
   * @returns GetWechatAccessTokenRespDto
   */
  public async getWechatMpAccessToken(
    requestBody: GetWechatAccessTokenDto
  ): Promise<GetWechatAccessTokenRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/get-wechat-access-token",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary 获取登录日志
   * @description 获取登录日志
   * @returns GetLoginHistoryRespDto
   */
  public async decryptWechatMiniProgramData1({
    appId,
    clientIp,
    success,
    start,
    end,
    page = 1,
    limit = 10,
  }: {
    /** 应用 ID，可根据应用 ID 筛选。默认不传获取所有应用的登录历史。 **/
    appId?: string;
    /** 客户端 IP，可根据登录时的客户端 IP 进行筛选。默认不传获取所有登录 IP 的登录历史。 **/
    clientIp?: string;
    /** 是否登录成功，可根据是否登录成功进行筛选。默认不传获取的记录中既包含成功也包含失败的的登录历史。 **/
    success?: boolean;
    /** 开始时间，为单位为毫秒的时间戳 **/
    start?: number;
    /** 结束时间，为单位为毫秒的时间戳 **/
    end?: number;
    /** 当前页数，从 1 开始 **/
    page?: number;
    /** 每页数目，最大不能超过 50，默认为 10 **/
    limit?: number;
  }): Promise<GetLoginHistoryRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-login-history",
      params: {
        appId: appId,
        clientIp: clientIp,
        success: success,
        start: start,
        end: end,
        page: page,
        limit: limit,
      },
    });
    return result;
  }
  /**
   * @summary 获取登录应用
   * @description 获取登录应用
   * @returns GetLoggedInAppsRespDto
   */
  public async getLoggedInApps(): Promise<GetLoggedInAppsRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-logged-in-apps",
    });
    return result;
  }
  /**
   * @summary 获取具备访问权限的应用
   * @description 获取具备访问权限的应用
   * @returns GetAccessibleAppsRespDto
   */
  public async getAccessibleApps(): Promise<GetAccessibleAppsRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-accessible-apps",
    });
    return result;
  }
  /**
   * @summary 获取部门列表
   * @description 此接口用于获取用户的部门列表，可根据一定排序规则进行排序。
   * @returns UserDepartmentPaginatedRespDto
   */
  public async getDepartmentList({
    page = 1,
    limit = 10,
    withCustomData = false,
    sortBy = "JoinDepartmentAt",
    orderBy = "Desc",
  }: {
    /** 当前页数，从 1 开始 **/
    page?: number;
    /** 每页数目，最大不能超过 50，默认为 10 **/
    limit?: number;
    /** 是否获取部门的自定义数据 **/
    withCustomData?: boolean;
    /** 排序依据，如 部门创建时间、加入部门时间、部门名称、部门标志符 **/
    sortBy?:
      | "DepartmentCreatedAt"
      | "JoinDepartmentAt"
      | "DepartmentName"
      | "DepartmemtCode";
    /** 增序或降序 **/
    orderBy?: "Asc" | "Desc";
  }): Promise<UserDepartmentPaginatedRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-department-list",
      params: {
        page: page,
        limit: limit,
        withCustomData: withCustomData,
        sortBy: sortBy,
        orderBy: orderBy,
      },
    });
    return result;
  }
  /**
   * @summary 获取被授权的资源列表
   * @description 此接口用于获取用户被授权的资源列表。
   * @returns AuthorizedResourcePaginatedRespDto
   */
  public async getAuthorizedResources({
    namespace,
    resourceType,
  }: {
    /** 所属权限分组的 code **/
    namespace?: string;
    /** 资源类型，如 数据、API、菜单、按钮 **/
    resourceType?: "DATA" | "API" | "MENU" | "BUTTON" | "UI";
  }): Promise<AuthorizedResourcePaginatedRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-authorized-resources",
      params: {
        namespace: namespace,
        resourceType: resourceType,
      },
    });
    return result;
  }
  /**
   * @summary 文件上传
   * @returns UploadRespDto
   */
  public async upload(requestBody: UploadDto): Promise<UploadRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v2/upload",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary 使用用户凭证登录
   * @description
   * 此端点为基于直接 API 调用形式的登录端点，适用于你需要自建登录页面的场景。**此端点暂时不支持 MFA、信息补全、首次密码重置等流程，如有需要，请使用 OIDC 标准协议认证端点。**
   *
   *
   * 注意事项：取决于你在 Authing 创建应用时选择的**应用类型**和应用配置的**换取 token 身份验证方式**，在调用此接口时需要对客户端的身份进行不同形式的验证。
   *
   * <details>
   * <summary>点击展开详情</summary>
   *
   * <br>
   *
   * 你可以在 [Authing 控制台](https://console.authing.cn) 的**应用** - **自建应用** - **应用详情** - **应用配置** - **其他设置** - **授权配置**
   * 中找到**换取 token 身份验证方式** 配置项：
   *
   * > 单页 Web 应用和客户端应用隐藏，默认为 `none`，不允许修改；后端应用和标准 Web 应用可以修改此配置项。
   *
   * ![](https://files.authing.co/api-explorer/tokenAuthMethod.jpg)
   *
   * #### 换取 token 身份验证方式为 none 时
   *
   * 调用此接口不需要进行额外操作。
   *
   * #### 换取 token 身份验证方式为 client_secret_post 时
   *
   * 调用此接口时必须在 body 中传递 `client_id` 和 `client_secret` 参数，作为验证客户端身份的条件。其中 `client_id` 为应用 ID、`client_secret` 为应用密钥。
   *
   * #### 换取 token 身份验证方式为 client_secret_basic 时
   *
   * 调用此接口时必须在 HTTP 请求头中携带 `authorization` 请求头，作为验证客户端身份的条件。`authorization` 请求头的格式如下（其中 `client_id` 为应用 ID、`client_secret` 为应用密钥。）：
   *
   * ```
   * Basic base64(<client_id>:<client_secret>)
   * ```
   *
   * 结果示例：
   *
   * ```
   * Basic NjA2M2ZiMmYzY3h4eHg2ZGY1NWYzOWViOjJmZTdjODdhODFmODY3eHh4eDAzMjRkZjEyZGFlZGM3
   * ```
   *
   * JS 代码示例：
   *
   * ```js
   * 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64');
   * ```
   *
   * </details>
   *
   *
   * @returns LoginTokenRespDto 成功认证
   */
  public async signInByCredentials(
    requestBody: SigninByCredentialsDto
  ): Promise<LoginTokenRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/signin",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary 使用移动端社会化登录
   * @description
   * 此端点为移动端社会化登录接口，使用第三方移动社会化登录返回的临时凭证登录，并换取用户的 `id_token` 和 `access_token`。请先阅读相应社会化登录的接入流程。
   *
   *
   * 注意事项：取决于你在 Authing 创建应用时选择的**应用类型**和应用配置的**换取 token 身份验证方式**，在调用此接口时需要对客户端的身份进行不同形式的验证。
   *
   * <details>
   * <summary>点击展开详情</summary>
   *
   * <br>
   *
   * 你可以在 [Authing 控制台](https://console.authing.cn) 的**应用** - **自建应用** - **应用详情** - **应用配置** - **其他设置** - **授权配置**
   * 中找到**换取 token 身份验证方式** 配置项：
   *
   * > 单页 Web 应用和客户端应用隐藏，默认为 `none`，不允许修改；后端应用和标准 Web 应用可以修改此配置项。
   *
   * ![](https://files.authing.co/api-explorer/tokenAuthMethod.jpg)
   *
   * #### 换取 token 身份验证方式为 none 时
   *
   * 调用此接口不需要进行额外操作。
   *
   * #### 换取 token 身份验证方式为 client_secret_post 时
   *
   * 调用此接口时必须在 body 中传递 `client_id` 和 `client_secret` 参数，作为验证客户端身份的条件。其中 `client_id` 为应用 ID、`client_secret` 为应用密钥。
   *
   * #### 换取 token 身份验证方式为 client_secret_basic 时
   *
   * 调用此接口时必须在 HTTP 请求头中携带 `authorization` 请求头，作为验证客户端身份的条件。`authorization` 请求头的格式如下（其中 `client_id` 为应用 ID、`client_secret` 为应用密钥。）：
   *
   * ```
   * Basic base64(<client_id>:<client_secret>)
   * ```
   *
   * 结果示例：
   *
   * ```
   * Basic NjA2M2ZiMmYzY3h4eHg2ZGY1NWYzOWViOjJmZTdjODdhODFmODY3eHh4eDAzMjRkZjEyZGFlZGM3
   * ```
   *
   * JS 代码示例：
   *
   * ```js
   * 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64');
   * ```
   *
   * </details>
   *
   *
   * @returns LoginTokenRespDto
   */
  public async signInByMobile(
    requestBody: SigninByMobileDto
  ): Promise<LoginTokenRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/signin-by-mobile",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary 获取支付宝 AuthInfo
   * @description 此接口用于获取发起支付宝认证需要的[初始化参数 AuthInfo](https://opendocs.alipay.com/open/218/105325)。
   * @returns GetAlipayAuthInfoRespDto
   */
  public async getAlipayAuthInfo({
    extIdpConnidentifier,
  }: {
    /** 外部身份源连接标志符 **/
    extIdpConnidentifier: string;
  }): Promise<GetAlipayAuthInfoRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-alipay-authinfo",
      params: {
        extIdpConnidentifier: extIdpConnidentifier,
      },
    });
    return result;
  }
  /**
   * @summary 生成用于登录的二维码
   * @description 生成用于登录的二维码，目前支持生成微信公众号扫码登录、小程序扫码登录、自建移动 APP 扫码登录的二维码。
   * @returns GeneQRCodeRespDto
   */
  public async geneQrCode(
    requestBody: GenerateQrcodeDto
  ): Promise<GeneQRCodeRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/gene-qrcode",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary 查询二维码状态
   * @description 按照用户扫码顺序，共分为未扫码、已扫码等待用户确认、用户同意/取消授权、二维码过期以及未知错误六种状态，前端应该通过不同的状态给到用户不同的反馈。你可以通过下面这篇文章了解扫码登录详细的流程：https://docs.authing.cn/v2/concepts/how-qrcode-works.html.
   * @returns CheckQRCodeStatusRespDto
   */
  public async checkQrCodeStatus({
    qrcodeId,
  }: {
    /** 二维码唯一 ID **/
    qrcodeId: string;
  }): Promise<CheckQRCodeStatusRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/check-qrcode-status",
      params: {
        qrcodeId: qrcodeId,
      },
    });
    return result;
  }
  /**
   * @summary 使用二维码 ticket 换取 TokenSet
   * @description
   * 此端点为使用二维码的 ticket 换取用户的 `access_token` 和 `id_token`。
   *
   *
   * 注意事项：取决于你在 Authing 创建应用时选择的**应用类型**和应用配置的**换取 token 身份验证方式**，在调用此接口时需要对客户端的身份进行不同形式的验证。
   *
   * <details>
   * <summary>点击展开详情</summary>
   *
   * <br>
   *
   * 你可以在 [Authing 控制台](https://console.authing.cn) 的**应用** - **自建应用** - **应用详情** - **应用配置** - **其他设置** - **授权配置**
   * 中找到**换取 token 身份验证方式** 配置项：
   *
   * > 单页 Web 应用和客户端应用隐藏，默认为 `none`，不允许修改；后端应用和标准 Web 应用可以修改此配置项。
   *
   * ![](https://files.authing.co/api-explorer/tokenAuthMethod.jpg)
   *
   * #### 换取 token 身份验证方式为 none 时
   *
   * 调用此接口不需要进行额外操作。
   *
   * #### 换取 token 身份验证方式为 client_secret_post 时
   *
   * 调用此接口时必须在 body 中传递 `client_id` 和 `client_secret` 参数，作为验证客户端身份的条件。其中 `client_id` 为应用 ID、`client_secret` 为应用密钥。
   *
   * #### 换取 token 身份验证方式为 client_secret_basic 时
   *
   * 调用此接口时必须在 HTTP 请求头中携带 `authorization` 请求头，作为验证客户端身份的条件。`authorization` 请求头的格式如下（其中 `client_id` 为应用 ID、`client_secret` 为应用密钥。）：
   *
   * ```
   * Basic base64(<client_id>:<client_secret>)
   * ```
   *
   * 结果示例：
   *
   * ```
   * Basic NjA2M2ZiMmYzY3h4eHg2ZGY1NWYzOWViOjJmZTdjODdhODFmODY3eHh4eDAzMjRkZjEyZGFlZGM3
   * ```
   *
   * JS 代码示例：
   *
   * ```js
   * 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64');
   * ```
   *
   * </details>
   *
   *
   * @returns LoginTokenRespDto
   */
  public async exchangeTokenSetWithQrCodeTicket(
    requestBody: ExchangeTokenSetWithQRcodeTicketDto
  ): Promise<LoginTokenRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/exchange-tokenset-with-qrcode-ticket",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary 生成图形验证码
   * @description 当用户池开启**登录失败次数限制**并且**登录安全策略**设置为**验证码**时，如果当前请求触发登录失败次数上限，要求用户输入图形验证码。此接口用于在前端生成图形验证码，会返回一个 `content-type` 为 `image/svg+xml` 的响应。
   * @returns any
   */
  public async geneCaptchaCode({
    r,
  }: {
    /** 随机字符串或者时间戳，防止浏览器缓存 **/
    r?: string;
  }): Promise<any> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/captcha-code",
      params: {
        r: r,
      },
    });
    return result;
  }
  /**
   * @summary 自建 APP 扫码登录：APP 端修改二维码状态
   * @description 此端点用于在自建 APP 扫码登录中修改二维码状态，对应着在浏览器渲染出二维码之后，终端用户扫码、确认授权、取消授权的过程。**此接口要求具备用户的登录态**。
   * @returns CommonResponseDto
   */
  public async changeQrCodeStatus(
    requestBody: ChangeQRCodeStatusDto
  ): Promise<CommonResponseDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/change-qrcode-status",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary 发送短信
   * @description 发送短信时必须指定短信 Channel，每个手机号同一 Channel 在一分钟内只能发送一次。
   * @returns SendSMSRespDto
   */
  public async sendSms(requestBody: SendSMSDto): Promise<SendSMSRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/send-sms",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary 发送邮件
   * @description 发送邮件时必须指定邮件 Channel，每个邮箱同一 Channel 在一分钟内只能发送一次。
   * @returns SendEmailRespDto
   */
  public async sendEmail(requestBody: SendEmailDto): Promise<SendEmailRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/send-email",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary 获取用户资料
   * @description 此端点用户获取用户资料，需要在请求头中带上用户的 `access_token`，Authing 服务器会根据用户 `access_token` 中的 `scope` 返回对应的字段。
   * @returns UserSingleRespDto
   */
  public async getProfile({
    withCustomData = false,
    withIdentities = false,
    withDepartmentIds = false,
  }: {
    /** 是否获取自定义数据 **/
    withCustomData?: boolean;
    /** 是否获取 identities **/
    withIdentities?: boolean;
    /** 是否获取部门 ID 列表 **/
    withDepartmentIds?: boolean;
  }): Promise<UserSingleRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-profile",
      params: {
        withCustomData: withCustomData,
        withIdentities: withIdentities,
        withDepartmentIds: withDepartmentIds,
      },
    });
    return result;
  }
  /**
   * @summary 修改用户资料
   * @description 此接口用于修改用户的用户资料，包含用户的自定义数据。如果需要**修改邮箱**、**修改手机号**、**修改密码**，请使用对应的单独接口。
   * @returns UserSingleRespDto
   */
  public async updateProfile(
    requestBody: UpdateUserProfileDto
  ): Promise<UserSingleRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/update-profile",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary 绑定邮箱
   * @description 如果用户还**没有绑定邮箱**，此接口可用于用户**自主**绑定邮箱。如果用户已经绑定邮箱想要修改邮箱，请使用**修改邮箱**接口。你需要先调用**发送邮件**接口发送邮箱验证码。
   * @returns CommonResponseDto
   */
  public async bindEmail(
    requestBody: BindEmailDto
  ): Promise<CommonResponseDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/bind-email",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary 解绑邮箱
   * @description 用户解绑邮箱，如果用户没有绑定其他登录方式（手机号、社会化登录账号），将无法解绑邮箱，会提示错误。
   * @returns CommonResponseDto
   */
  public async unbindEmail(): Promise<CommonResponseDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/unbind-email",
    });
    return result;
  }
  /**
   * @summary 绑定手机号
   * @description 如果用户还**没有绑定手机号**，此接口可用于用户**自主**绑定手机号。如果用户已经绑定手机号想要修改手机号，请使用**修改手机号**接口。你需要先调用**发送短信**接口发送短信验证码。
   * @returns CommonResponseDto
   */
  public async bindPhone(
    requestBody: BindPhoneDto
  ): Promise<CommonResponseDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/bind-phone",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary 解绑手机号
   * @description 用户解绑手机号，如果用户没有绑定其他登录方式（邮箱、社会化登录账号），将无法解绑手机号，会提示错误。
   * @returns CommonResponseDto
   */
  public async unbindPhone(): Promise<CommonResponseDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/unbind-phone",
    });
    return result;
  }
  /**
   * @summary 获取密码强度和账号安全等级评分
   * @description 获取用户的密码强度和账号安全等级评分，需要在请求头中带上用户的 `access_token`。
   * @returns GetSecurityInfoRespDto
   */
  public async getSecurityLevel(): Promise<GetSecurityInfoRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-security-info",
    });
    return result;
  }
  /**
   * @summary 修改密码
   * @description 此端点用于用户自主修改密码，如果用户之前已经设置密码，需要提供用户的原始密码作为凭证。如果用户忘记了当前密码，请使用**忘记密码**接口。
   * @returns CommonResponseDto
   */
  public async updatePassword(
    requestBody: UpdatePasswordDto
  ): Promise<CommonResponseDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/update-password",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary 发起修改邮箱的验证请求
   * @description 终端用户自主修改邮箱时，需要提供相应的验证手段。此接口用于验证用户的修改邮箱请求是否合法。当前支持通过**邮箱验证码**的方式进行验证，你需要先调用发送邮件接口发送对应的邮件验证码。
   * @returns VerifyUpdateEmailRequestRespDto
   */
  public async verifyUpdateEmailRequest(
    requestBody: UpdateEmailVerifyRequestDto
  ): Promise<VerifyUpdateEmailRequestRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/verify-update-email-request",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary 修改邮箱
   * @description 终端用户自主修改邮箱，需要提供相应的验证手段，见[发起修改邮箱的验证请求](#tag/用户资料/修改邮箱/operation/ProfileV3Controller_updateEmailVerification)。
   * 此参数需要提供一次性临时凭证 `updateEmailToken`，此数据需要从**发起修改邮箱的验证请求**接口获取。
   * @returns CommonResponseDto
   */
  public async updateEmail(
    requestBody: UpdateEmailDto
  ): Promise<CommonResponseDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/update-email",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary 发起修改手机号的验证请求
   * @description 终端用户自主修改手机号时，需要提供相应的验证手段。此接口用于验证用户的修改手机号请求是否合法。当前支持通过**短信验证码**的方式进行验证，你需要先调用发送短信接口发送对应的短信验证码。
   * @returns VerifyUpdatePhoneRequestRespDto
   */
  public async verifyUpdatePhoneRequest(
    requestBody: VerifyUpdatePhoneRequestDto
  ): Promise<VerifyUpdatePhoneRequestRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/verify-update-phone-request",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary 修改手机号
   * @description 终端用户自主修改手机号，需要提供相应的验证手段，见[发起修改手机号的验证请求](#tag/用户资料/修改邮箱/operation/ProfileV3Controller_updatePhoneVerification)。
   * 此参数需要提供一次性临时凭证 `updatePhoneToken`，此数据需要从**发起修改手机号的验证请求**接口获取。
   * @returns CommonResponseDto
   */
  public async updatePhone(
    requestBody: UpdatePhoneDto
  ): Promise<CommonResponseDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/update-phone",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary 发起忘记密码请求
   * @description 当用户忘记密码时，可以通过此端点找回密码。用户需要使用相关验证手段进行验证，目前支持**邮箱验证码**和**手机号验证码**两种验证手段。
   * @returns PasswordResetVerifyResp
   */
  public async verifyResetPasswordRequest(
    requestBody: VerifyResetPasswordRequestDto
  ): Promise<PasswordResetVerifyResp> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/verify-reset-password-request",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary 忘记密码
   * @description 此端点用于用户忘记密码之后，通过**手机号验证码**或者**邮箱验证码**的方式重置密码。此接口需要提供用于重置密码的临时凭证 `passwordResetToken`，此参数需要通过**发起忘记密码请求**接口获取。
   * @returns IsSuccessRespDto
   */
  public async resetPassword(
    requestBody: ResetPasswordDto
  ): Promise<IsSuccessRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/reset-password",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary 发起注销账号请求
   * @description 当用户希望注销账号时，需提供相应凭证，当前支持**使用邮箱验证码**、使用**手机验证码**、**使用密码**三种验证方式。
   * @returns VerifyDeleteAccountRequestRespDto
   */
  public async veirfyDeleteAccountRequest(
    requestBody: VerifyDeleteAccountRequestDto
  ): Promise<VerifyDeleteAccountRequestRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/verify-delete-account-request",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary 注销账户
   * @description 此端点用于用户自主注销账号，需要提供用于注销账号的临时凭证 deleteAccountToken，此参数需要通过**发起注销账号请求**接口获取。
   * @returns IsSuccessRespDto
   */
  public async deleteAccount(
    requestBody: DeleteAccounDto
  ): Promise<IsSuccessRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/delete-account",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary 获取应用公开配置
   * @returns any
   */
  public async getApplicationPublicConfig({
    appId,
  }: {
    /** 应用 ID，可选，默认会从请求的域名获取对应的应用 **/
    appId?: string;
  }): Promise<any> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-application-public-config",
      params: {
        appId: appId,
      },
    });
    return result;
  }
  /**
   * @summary 获取服务器公开信息
   * @description 可端点可获取服务器的公开信息，如 RSA256 公钥、SM2 公钥、Authing 服务版本号等。
   * @returns SystemInfoResp
   */
  public async getSystemInfo(): Promise<SystemInfoResp> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/system",
    });
    return result;
  }
  /**
   * @summary 获取国家列表
   * @description 动态获取国家列表，可以用于前端登录页面国家选择和国际短信输入框选择，以减少前端静态资源体积。
   * @returns GetCountryListRespDto
   */
  public async getCountryList(): Promise<GetCountryListRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-country-list",
    });
    return result;
  }
  /**
   * @summary 预检验验证码是否正确
   * @description 预检测验证码是否有效，此检验不会使得验证码失效。
   * @returns PreCheckCodeRespDto
   */
  public async preCheckCode(
    requestBody: PreCheckCodeDto
  ): Promise<PreCheckCodeRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/pre-check-code",
      data: requestBody,
    });
    return result;
  }

  // ==== AUTO GENERATED AUTHENTICATION METHODS END ====
}
