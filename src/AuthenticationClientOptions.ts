import { JWKSObject, Lang } from "./utils";

export const DEFAULT_COOKIE_KEY = 'X-Authing-Node-OIDC-State';

export const DEFAULT_SCOPE = 'openid profile';

/**
 * NodeJS 认证 SDK 初始化参数
 */
export interface AuthenticationClientInitOptions {
  /** 应用 ID */
  appId: string;

  /** 应用 Secret */
  appSecret: string;

  /** 应用对应的用户池域名，例如 pool.authing.cn */
  host: string;

  /** 认证完成后的重定向目标 URL */
  redirectUri: string;

  /** 登出完成后的重定向目标 URL */
  logoutRedirectUri?: string;

  /**
   * 应用侧向 Authing 请求的权限，以空格分隔，默认为 'openid profile'
   *
   * 成功获取的权限会出现在 Access Token 的 scope 字段中
   *
   * 一些示例：
   * - openid: OIDC 标准规定的权限，必须包含
   * - profile: 获取用户的基本身份信息
   * - offline_access: 获取用户的 Refresh Token，可用于调用 refreshLoginState 刷新用户的登录态
   */
  scope?: string;

  /**
   * 服务端的 JWKS 公钥，用于验证 Token 签名，默认会通过网络请求从服务端的 JWKS 端点自动获取
   */
  serverJWKS?: JWKSObject;

  /**
   * 存储认证上下文的 Cookie 名称
   */
  cookieKey?: string;

    /** 请求来源 */
  requestFrom?: string;

  /**
   * 语言
   */
  lang?: Lang;
}
