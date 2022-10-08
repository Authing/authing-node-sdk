/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LangObject } from './LangObject';

export type CountryDetailInfo = {
    /**
     * [ISO 3166 国际标准](https://www.iban.com/country-codes)中国家的 Alpha-2 简称
     */
    alpha2: string;
    /**
     * [ISO 3166 国际标准](https://www.iban.com/country-codes)中国家的 Alpha-3 简称
     */
    alpha3: string;
    /**
     * 国家手机区号
     */
    phoneCountryCode: string;
    /**
     * 国旗图标
     */
    flag: string;
    /**
     * 名称，多语言结构，目前只支持中文和英文
     */
    name: LangObject;
};
