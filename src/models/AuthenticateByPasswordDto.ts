/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AuthenticateByPasswordDto = {
    /**
     * User password, not encrypted by default. All APIs of Authing securely transmit passwords through the HTTPS protocol, which can ensure security to a certain extent.
     * If you need a higher level of security, we also support `RSA256` and national secret `SM2` password encryption methods. See the optional parameter `options.passwordEncryptType` for details.
     *
     */
    password: string;
    /**
     * User account (username/mobile phone number/email)
     */
    account?: string;
    /**
     * Email address is not case sensitive.
     */
    email?: string;
    /**
     * Username (username)
     */
    username?: string;
    /**
     * Phone number
     */
    phone?: string;
};
