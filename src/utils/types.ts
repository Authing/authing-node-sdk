export interface OidcParams {
  /**
   * 回调地址，选填。如果不传默认为 SDK 初始化时的 redirectUri 参数。
   */
  redirectUri?: string;
  /**
   * 响应类型，选填，可选值为 code、code id_token token、code id_token、code id_token、code token、id_token token、id_token、none；默认为 code，授权码模式。
   */
  responseType?:
    | 'code'
    | 'code id_token token'
    | 'code id_token'
    | 'code token'
    | 'id_token token'
    | 'id_token'
    | 'none';
  /**
   * 响应类型，选填，可选值为 query、fragment、form_post；默认为 query，即通过浏览器重定向发送 code 到回调地址。
   */
  responseMode?: 'query' | 'fragment' | 'form_post';
  /**
   * 随机字符串，选填，默认自动生成。
   */
  state?: string;
  /**
   * 随机字符串，选填，默认自动生成。
   */
  nonce?: string;
  /**
   * 请求的权限项目，选填，OIDC 协议默认为 openid profile email phone address，OAuth 2.0 协议默认为 user。
   */
  scope?: string;
  /**
   * 可以为 plain、S256，表示计算 code_challenge 时使用的摘要算法，plain 表示不用任何算法，S256 表示 code_challenge 是使用 SHA256 计算的。
   */
  codeChallengeMethod?: 'plain' | 'S256';
  /**
   * 一个长度大于等于 43 的字符串，作为 code_challenge 发送到 Authing。
   */
  codeChallenge?: string;
  /**
   * Authing 租户 ID
   */
  tenantId?: string;

  /**
   * 是否要求强制登录
   */
  forced?: boolean;
}

export interface OauthParams {
  /**
   * 回调地址，选填。如果不传默认为 SDK 初始化时的 redirectUri 参数。
   */
  redirectUri?: string;
  /**
   * 响应类型，选填，可选值为 code、token 默认为 code，授权码模式。
   */
  responseType?: 'code' | 'token';
  /**
   * 随机字符串，选填，默认自动生成。
   */
  state?: string;
  /**
   * 请求的权限项目，选填，OAuth 2.0 协议默认为 user。
   */
  scope?: string;
}

export interface LogoutParams {
  /**
   * 登出完成后的重定向目标 URL，覆盖初始化参数中的对应设置，默认使用初始化时传入的 logoutRedirectUri
   */
  redirectUri?: string;
  /**
   * 用户登录时获取的 ID Token，用于无效化用户 Token，建议传入
   */
  idToken?: string;
  /**
   * 传递到目标 URL 的中间状态标识符
   */
  state?: string;
}

export interface CasParams {
  /**
   * CAS 协议中的业务回调地址。
   */
  service?: string;
}


export type Cas20ValidationSuccessResult = {
  serviceResponse: {
    authenticationSuccess: {
      user: string;
      attributes: {
        updated_at: string;
        address: {
          country: string;
          postal_code: string;
          region: string;
          formatted: string;
        };
        phone_number_verified: boolean;
        phone_number: string;
        locale: string;
        zoneinfo: string;
        birthdate: string;
        gender: string;
        email_verified: boolean;
        email: string;
        website: string;
        picture: string;
        profile: string;
        preferred_username: string;
        nickname: string;
        middle_name: string;
        family_name: string;
        given_name: string;
        name: string;
        sub: string;
        external_id: string;
        unionid: string;
      };
    };
  };
};
export type Cas20ValidationFailureResult = {
  authenticationFailure: {
    code: string;
    description: string;
  };
};
