/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetCaptchaCodeDataDto = {
    /**
     * Verification code image svg
     */
    captchaCodeSvg: string;
    /**
     * The verification code corresponds to the token and needs to be submitted together with the verification code entered by the user in the login interface.
     */
    captchaToken: string;
};
