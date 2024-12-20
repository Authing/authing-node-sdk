/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type InviteeProfileDto = {
    /**
     * username
     */
    username?: string;
    /**
     * Nick name
     */
    nickname?: string;
    /**
     * company
     */
    company?: string;
    /**
     * avatar
     */
    photo?: string;
    /**
     * equipment
     */
    device?: string;
    /**
     * Browser
     */
    browser?: string;
    /**
     * name
     */
    name?: string;
    /**
     * name
     */
    givenName?: string;
    /**
     * surname
     */
    familyName?: string;
    /**
     *Middle name
     */
    middleName?: string;
    /**
     * material
     */
    profile?: string;
    /**
     * The user name you wish to be called
     */
    preferredUsername?: string;
    /**
     * Website
     */
    website?: string;
    /**
     * Gender F: Female; M: Male
     */
    gender?: InviteeProfileDto.gender;
    /**
     * Birthday
     */
    birthdate?: string;
    /**
     * area
     */
    zoneinfo?: string;
    /**
     * Language area
     */
    locale?: string;
    /**
     * address
     */
    address?: string;
    /**
     * Format
     */
    formatted?: string;
    /**
     * Street address
     */
    streetAddress?: string;
    /**
     * Location
     */
    locality?: string;
    /**
     * area
     */
    region?: string;
    /**
     * postal code
     */
    postalCode?: string;
    /**
     * nation
     */
    country?: string;
    /**
     * Mail
     */
    email?: string;
    /**
     * Phone number
     */
    phone?: string;
    /**
     *Mobile phone number international area code
     */
    phoneCountryCode?: string;
    /**
     * User-defined fields
     */
    customData?: any;
};

export namespace InviteeProfileDto {

    /**
     * Gender F: Female; M: Male
     */
    export enum gender {
        M = 'M',
        F = 'F',
        U = 'U',
    }


}
