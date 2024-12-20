/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BindByPhoneCodeInputApi = {
    /**
     * Intermediate key
     */
    key: string;
    /**
     * Operation code
     */
    action: string;
    /**
     * Mobile phone verification code (four digits: 1234; six digits: 123456)
     */
    code: string;
    /**
     * Phone number
     */
    phone: string;
    /**
     * Country code (standard format: plus sign "+" plus country code digits; the current verification is compatible with historical user input habits. For example, the standard format of China's country code is "+86", and there are "86, 086, 0086" and other formats)
     */
    phoneCountryCode?: string;
};
