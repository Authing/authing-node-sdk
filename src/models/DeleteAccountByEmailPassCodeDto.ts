/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeleteAccountByEmailPassCodeDto = {
    /**
     * The email address bound to this account is not case-sensitive.
     */
    email?: string;
    /**
     * Email verification code, a SMS verification code can only be used once, and the default validity time is 5 minutes. You need to obtain it through the **Send Email** interface.
     */
    passCode: string;
};
