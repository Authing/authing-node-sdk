/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TokenEndPointParams = {
    /**
     * Authing 应用 ID，当换取 token 身份验证方式为 `client_secret_post` 或 `none` 时必填。
     */
    client_id?: string;
    /**
     * Authing 应用密钥，当换取 token 身份验证方式为 `client_secret_post` 时必填。
     */
    client_secret?: string;
    /**
     * 授权模式：
     * - `authorization_code`: 使用一次性授权码 `code` 换取。
     * - `refresh_token`: 使用 Refresh Token 获取。
     * - `client_credentials`: M2M 无用户交互场景使用。
     * - `password`: 密码模式，使用用户的账号密码获取，不推荐使用。
     * - `http://authing.cn/oidc/grant_type/authing_token`: 使用 Authing 历史版本签发的 Token 换取，不推荐使用。
     *
     */
    grant_type: TokenEndPointParams.grant_type;
    /**
     * 发起 OIDC 授权登录时的 redirect_uri 值，必须与发起登录请求时的参数一致
     */
    redirect_uri: string;
    /**
     * 获取到的一次性授权码，**一个 code 仅限一次性使用**，用后作废。有效期为 10 分钟。当 `grant_type` 为 `authorization_code` 时必填。
     */
    code?: string;
    /**
     * 拼接 OIDC 授权登录连接时生成的随机字符串值，也就是 code_challenge 原始值，不是其摘要值。当使用**授权码 + PKCE 模式**时需要填写此参数。当 `grant_type` 为 `authorization_code` 并且使用 PKCE 模式时必填。
     */
    code_verifier?: string;
    /**
     * 用户的 Refresh Token。当 `grant_type` 为 `refresh_token` 时必填。
     */
    refresh_token?: string;
};

export namespace TokenEndPointParams {

    /**
     * 授权模式：
     * - `authorization_code`: 使用一次性授权码 `code` 换取。
     * - `refresh_token`: 使用 Refresh Token 获取。
     * - `client_credentials`: M2M 无用户交互场景使用。
     * - `password`: 密码模式，使用用户的账号密码获取，不推荐使用。
     * - `http://authing.cn/oidc/grant_type/authing_token`: 使用 Authing 历史版本签发的 Token 换取，不推荐使用。
     *
     */
    export enum grant_type {
        AUTHORIZATION_CODE = 'authorization_code',
        REFRESH_TOKEN = 'refresh_token',
        CLIENT_CREDENTIALS = 'client_credentials',
        PASSWORD = 'password',
        HTTP_AUTHING_CN_OIDC_GRANT_TYPE_AUTHING_TOKEN = 'http://authing.cn/oidc/grant_type/authing_token',
    }


}
