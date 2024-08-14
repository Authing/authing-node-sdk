/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VerifyUpdatePhoneRequestData = {
    /**
     * 用于修改当前手机号 token，你需要使用此 token 请求**修改手机号**的接口。
     */
    updatePhoneToken: string;
    /**
     * 过期时间，单位为秒。
     */
    tokenExpiresIn: number;
};
