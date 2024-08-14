/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LegacyExchangeTokenParams = {
    /**
     * 授权范围，多个资源之间使用空格分隔
     */
    scope: string;
    /**
     * 需要返回的 token 类型
     */
    response_token_type: LegacyExchangeTokenParams.response_token_type;
    /**
     * Authing 应用 ID
     */
    client_id: string;
    /**
     * Authing 应用密钥，当换取 token 身份验证方式为 `client_secret_post` 时必填。
     */
    client_secret?: string;
    /**
     * id token
     */
    id_token?: string;
    /**
     * access token
     */
    access_token?: string;
    /**
     * context 参数，可以在 pipeline 中获取
     */
    exchange_token_ctx?: any;
};

export namespace LegacyExchangeTokenParams {

    /**
     * 需要返回的 token 类型
     */
    export enum response_token_type {
        ID_TOKEN = 'id_token',
        ACCESS_TOKEN = 'access_token',
    }


}
