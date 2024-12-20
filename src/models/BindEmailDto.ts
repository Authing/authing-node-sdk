/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BindEmailDto = {
    /**
     * Email verification code. Each email verification code can only be used once and has a certain validity period.
     */
    passCode: string;
    /**
     * Email address is not case sensitive.
     */
    email: string;
};
