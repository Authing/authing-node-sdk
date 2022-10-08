/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetWechatAccessTokenDataDto = {
    /**
     * Authing 服务器缓存的微信 Access Token
     */
    accessToken: string;
    /**
     * Access Token 到期时间，为单位为秒的时间戳
     */
    expiresAt: number;
};
