/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ResetPasswordVerify = {
    /**
     * 用于重置密码 token
     */
    passwordResetToken: string;
    /**
     * 过期时间，单位为秒。
     */
    tokenExpiresIn: number;
};
