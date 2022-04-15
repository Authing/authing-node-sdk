/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AccessTokenDto = {
    /**
     * Access Token 内容
     */
    access_token: string;
    /**
     * token 签发时间
     */
    iat: number;
    /**
     * token 到期时间
     */
    exp: number;
};
