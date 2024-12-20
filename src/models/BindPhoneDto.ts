/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BindPhoneDto = {
    /**
     * SMS verification code, please note that each SMS verification code is used once and has an expiration date.
     */
    passCode: string;
    /**
     *Mobile phone number without area code. If it is a foreign mobile phone number, please specify the area code in the phoneCountryCode parameter.
     */
    phoneNumber: string;
    /**
     * Mobile phone area code, mainland China mobile phone number is optional. Authing SMS service does not have built-in support for international mobile phone numbers. You need to configure the corresponding international SMS service in the Authing console. A complete list of mobile phone area codes can be found at https://en.wikipedia.org/wiki/List_of_country_calling_codes.
     */
    phoneCountryCode?: string;
};
