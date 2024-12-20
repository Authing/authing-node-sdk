/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GeoIpLocation } from './GeoIpLocation';

export type GeoIp = {
    /**
     * Location
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
     * City name
     */
    city_name: string;
    /**
     * Continent Code
     */
    continent_code: string;
    /**
     * TimeZone
     */
    timezone: string;
};
