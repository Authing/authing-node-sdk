/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LoginTokenResponseDataDto = {
    /**
     * 接口调用凭据，在限制时间内被授权访问资源 API
     */
    access_token?: string;
    /**
     * 用户的身份凭证，解析后会包含用户信息
     */
    id_token?: string;
    /**
     * refresh_token 用于获取新的 AccessToken
     */
    refresh_token?: string;
    /**
     * token 类型
     */
    token_type: string;
    /**
     * 过期时间 单位是秒
     */
    expire_in: number;
};
