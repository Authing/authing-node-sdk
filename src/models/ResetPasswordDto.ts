/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ResetPasswordDto = {
    /**
     * 密码
     */
    password: string;
    /**
     * 重置密码的 token
     */
    passwordResetToken: string;
};
