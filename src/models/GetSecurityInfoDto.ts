/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetSecurityInfoDto = {
    /**
     * Password strength level
     */
    passwordSecurityLevel: number;
    /**
     * Whether MFA is bound
     */
    mfaEnrolled: boolean;
    /**
     * Whether a password has been set
     */
    passwordSet: boolean;
    /**
     * Whether the email address is bound
     */
    emailBinded: boolean;
    /**
     * Whether a mobile phone number is bound?
     */
    phoneBinded: boolean;
    /**
     *Account level rating
     */
    securityScore: number;
};
