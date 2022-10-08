/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VerifyUpdateEmailRequestData = {
    /**
     * 用于修改当前邮箱的 token，你需要使用此 token 调用**修改邮箱**接口。
     */
    updateEmailToken: string;
    /**
     * Token 有效时间，时间为 60 秒。
     */
    tokenExpiresIn: number;
};
