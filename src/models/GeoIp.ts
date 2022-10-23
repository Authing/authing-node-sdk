/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GeoIpLocation } from './GeoIpLocation';

export type GeoIp = {
    /**
     * 地理位置
     */
    location: GeoIpLocation;
    /**
     * Country Name
     */
    country_name: string;
    /**
     * Country Code 2
     */
    country_code2: string;
    /**
     * Country Code 3
     */
    country_code3: string;
    /**
     * Region Name
     */
    region_name: string;
    /**
     * Region Code
     */
    region_code: string;
    /**
     * 城市名称
     */
    city_name: string;
    /**
     * Continent Code
     */
    continent_code: string;
    /**
     * 时区
     */
    timezone: string;
};
