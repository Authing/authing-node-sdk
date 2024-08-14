/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TokenIntrospectEndpointParams = {
    /**
     * Authing 应用 ID。当在控制台配置检验 token 身份验证方式为 client_secret_post 和 none 时必填。
     */
    client_id?: string;
    /**
     * Authing 应用密钥。在控制台配置检验 token 身份验证方式为 client_secret_post 时必填。
     */
    client_secret?: string;
    /**
     * `access_token` 或者 `refresh_token` 的值
     */
    token: string;
    /**
     * 是否校验用户状态，若传入 true，当用户被删除、停用、归档、离职后，即使 token 在有效期内，也会被认为是无效 token
     */
    strict?: boolean;
};
