/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreatePublicAccountOtpDto = {
    /**
     * OTP 密钥
     */
    secret: string;
    /**
     * OTP Recovery Code
     */
    recoveryCode?: string;
};
