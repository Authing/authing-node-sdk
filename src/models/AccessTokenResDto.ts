/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AccessTokenResDto = {
    /**
     * Access Token 内容
     */
    access_token: string;
    /**
     * access_token 有效时间，默认为 7200 秒（两小时），过期之后应该重新获取新的 access_token。
     */
    expires_in: number;
};
