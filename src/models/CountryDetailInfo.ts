/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LangObject } from './LangObject';

export type CountryDetailInfo = {
    /**
     *[ISO 3166 International Standard](https://www.iban.com/country-codes) Chinese abbreviation of Alpha-2
     */
    alpha2: string;
    /**
     *[ISO 3166 International Standard](https://www.iban.com/country-codes) Chinese abbreviation of Alpha-3
     */
    alpha3: string;
    /**
     * National mobile phone area code
     */
    phoneCountryCode: string;
    /**
     * Flag icon
     */
    flag: string;
    /**
     * Name, multi-language structure, currently only supports Chinese and English
     */
    name: LangObject;
};
