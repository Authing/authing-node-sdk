/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApplicationMfaDto } from './ApplicationMfaDto';

export type GetMfaInfoDataDto = {
    /**
     * MFA Token
     */
    mfaToken: string;
    /**
     * Mobile phone number bound to MFA
     */
    mfaPhone?: string;
    /**
     * Mobile phone area code bound to MFA
     */
    mfaPhoneCountryCode?: string;
    /**
     *MFA bound email address
     */
    mfaEmail?: string;
    /**
     * User nickname
     */
    nickname?: string;
    /**
     * username
     */
    username?: string;
    /**
     *User mobile phone number
     */
    phone?: string;
    /**
     * User mobile phone area code
     */
    phoneCountryCode?: string;
    /**
     * Whether face verification is turned on
     */
    faceMfaEnabled?: boolean;
    /**
     * Whether OTP verification is enabled
     */
    totpMfaEnabled?: boolean;
    /**
     *MFA Factor List
     */
    applicationMfa: Array<ApplicationMfaDto>;
};
