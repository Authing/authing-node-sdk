/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ImportOtpItemDataDto = {
    /**
     * OTP 密钥
     */
    secret: string;
    /**
     * OTP Recovery Code
     */
    recoveryCode?: string;
};
