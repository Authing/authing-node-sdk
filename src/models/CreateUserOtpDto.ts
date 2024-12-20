/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateUserOtpDto = {
    /**
     * OTP secret
     */
    secret: string;
    /**
     * OTP Recovery Code
     */
    recoveryCode?: string;
};
