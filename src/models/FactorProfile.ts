/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type FactorProfile = {
    /**
     * This parameter must be passed when initiating binding of mobile phone SMS authentication elements. You need to pass the mobile phone number that the user wants to bind. The Authing server will send a SMS verification code to this mobile phone number, requiring the user to provide the verification code during the MFA binding stage. A mobile phone number can only be requested once per minute.
     */
    phoneNumber?: string;
    /**
     * Can be set when initiating binding of mobile phone SMS authentication elements and need to bind an international mobile phone number. The default is +86, the mobile phone area code of mainland China. Authing SMS service does not have built-in support for international mobile phone numbers. You need to configure the corresponding international SMS service in the Authing console. A complete list of mobile phone area codes can be found at https://en.wikipedia.org/wiki/List_of_country_calling_codes.
     */
    phoneCountryCode?: string;
    /**
     * This parameter must be passed when initiating the binding of email verification code authentication elements. You need to pass the email address that the user wants to bind. The Authing server will send an email verification code to this email address and require the user to provide the verification code during the MFA binding stage. An email address can only be requested once per minute.
     */
    email?: string;
};
