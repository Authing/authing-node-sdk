/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type IsUserExistsReqDto = {
    /**
     * Username, unique in the user pool
     */
    username?: string;
    /**
     * Email, not case sensitive
     */
    email?: string;
    /**
     *Mobile phone number without area code. If it is a foreign mobile phone number, please specify the area code in the phoneCountryCode parameter.
     */
    phone?: string;
    /**
     * Third-party external ID
     */
    externalId?: string;
};
