/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TokenRevocationEndpointParams = {
    /**
     * Authing 应用 ID。当在控制台配置撤回 token 身份验证方式为 client_secret_post 和 none 时必填。
     */
    client_id?: string;
    /**
     * Authing 应用密钥。在控制台配置撤回 token 身份验证方式为 client_secret_post 时必填。
     */
    client_secret?: string;
    /**
     * `access_token` 或者 `refresh_token` 的值
     */
    token: string;
};
