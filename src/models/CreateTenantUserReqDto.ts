/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreateTenantUserOptionsDto } from './CreateTenantUserOptionsDto';

export type CreateTenantUserReqDto = {
    /**
     * Tenant ID
     */
    tenantId: string;
    /**
     * gender:
     * - `M`: male, `male`
     * - `F`: female, `female`
     * - `U`: unknown, `unknown`
     *
     */
    gender: CreateTenantUserReqDto.gender;
    /**
     * Email, not case sensitive
     */
    email?: string;
    /**
     *Mobile phone number without area code. If it is a foreign mobile phone number, please specify the area code in the phoneCountryCode parameter.
     */
    phone?: string;
    /**
     * Mobile phone area code, mainland China mobile phone number is optional. Authing SMS service does not have built-in support for international mobile phone numbers. You need to configure the corresponding international SMS service in the Authing console. A complete list of mobile phone area codes can be found at https://en.wikipedia.org/wiki/List_of_country_calling_codes.
     */
    phoneCountryCode?: string;
    /**
     * Username, unique in the user pool
     */
    username?: string;
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
    preferredUsername?: string;
    /**
     * User password, default is clear text. We use the HTTPS protocol for secure transmission of passwords, which can ensure security to a certain extent. If you need a higher level of security, we also support RSA256 and SM2 to encrypt passwords. See the `passwordEncryptType` parameter for details.
     */
    password?: string;
    /**
     * Salt to encrypt user password
     */
    salt?: string;
    /**
     * Optional parameters
     */
    options?: CreateTenantUserOptionsDto;
};

export namespace CreateTenantUserReqDto {

    /**
     * gender:
     * - `M`: male, `male`
     * - `F`: female, `female`
     * - `U`: unknown, `unknown`
     *
     */
    export enum gender {
        M = 'M',
        F = 'F',
        U = 'U',
    }


}
