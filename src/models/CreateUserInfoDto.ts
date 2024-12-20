/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreateIdentityDto } from './CreateIdentityDto';
import type { CreateUserOtpDto } from './CreateUserOtpDto';

export type CreateUserInfoDto = {
    /**
     * Current status of account
     */
    status?: CreateUserInfoDto.status;
    /**
     * Email, not case sensitive
     */
    email?: string;
    /**
     *Mobile phone number without area code. If it is a foreign mobile phone number, please specify the area code in the phoneCountryCode parameter.
     */
    phone?: string;
    /**
     * Mobile phone area code, mainland China mobile phone number is optional. The Authing SMS service currently does not have built-in support for international mobile phone numbers. You need to configure the corresponding international SMS service in the Authing console. A complete list of mobile phone area codes can be found at https://en.wikipedia.org/wiki/List_of_country_calling_codes.
     */
    phoneCountryCode?: string;
    /**
     * Username, unique in the user pool
     */
    username?: string;
    /**
     * Third-party external ID
     */
    externalId?: string;
    /**
     * User’s real name, not unique
     */
    name?: string;
    /**
     * Nick name
     */
    nickname?: string;
    /**
     * Avatar link
     */
    photo?: string;
    /**
     * gender
     */
    gender?: CreateUserInfoDto.gender;
    /**
     * Is the email verified?
     */
    emailVerified?: boolean;
    /**
     * Is the mobile phone number verified?
     */
    phoneVerified?: boolean;
    /**
     *Date of birth
     */
    birthdate?: string;
    /**
     *Country
     */
    country?: string;
    /**
     *Province
     */
    province?: string;
    /**
     *City where you are located
     */
    city?: string;
    /**
     * Address
     */
    address?: string;
    /**
     * Street address
     */
    streetAddress?: string;
    /**
     * Postal code number
     */
    postalCode?: string;
    /**
     * Company where you work
     */
    company?: string;
    /**
     * Browser UA used for the most recent login
     */
    browser?: string;
    /**
     *The device from which you last logged in
     */
    device?: string;
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
     *Preferred Username
     */
    profile?: string;
    /**
     *Preferred Username
     */
    preferredUsername?: string;
    /**
     * User personal web page
     */
    website?: string;
    /**
     * User time zone information
     */
    zoneinfo?: string;
    /**
     *Locale
     */
    locale?: string;
    /**
     * Standard full address
     */
    formatted?: string;
    /**
     * User's area
     */
    region?: string;
    /**
     * User password, default is clear text. We use the HTTPS protocol for secure transmission of passwords, which can ensure security to a certain extent. If you need a higher level of security, we also support RSA256 and SM2 to encrypt passwords. See the `passwordEncryptType` parameter for details.
     */
    password?: string;
    /**
     * Salt to encrypt user password
     */
    salt?: string;
    /**
     * Tenant ID
     */
    tenantIds?: Array<string>;
    /**
     * User's OTP authenticator
     */
    otp?: CreateUserOtpDto;
    /**
     * List of department IDs to which the user belongs
     */
    departmentIds?: Array<string>;
    /**
     * Custom data, the key in the object passed in must first define the relevant custom fields in the user pool
     */
    customData?: any;
    /**
     * Data object data, the key in the object passed in must first define relevant custom fields in the user pool
     */
    metadataSource?: any;
    /**
     * Third-party identity source (it is recommended to call the binding interface for binding)
     */
    identities?: Array<CreateIdentityDto>;
    /**
     * User ID number
     */
    identityNumber?: string;
};

export namespace CreateUserInfoDto {

    /**
     * Current status of account
     */
    export enum status {
        SUSPENDED = 'Suspended',
        RESIGNED = 'Resigned',
        ACTIVATED = 'Activated',
        ARCHIVED = 'Archived',
        DEACTIVATED = 'Deactivated',
    }

    /**
     * gender
     */
    export enum gender {
        M = 'M',
        F = 'F',
        U = 'U',
    }


}
