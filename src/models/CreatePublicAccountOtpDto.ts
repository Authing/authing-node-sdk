/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreatePublicAccountOtpDto = {
    /**
     * OTP secret
     */
    secret: string;
    /**
     * OTP Recovery Code
     */
    recoveryCode?: string;
};
