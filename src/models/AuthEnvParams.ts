/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AuthEnvParams = {
    /**
     *ip
     */
    ip?: string;
    /**
     * City
     */
    city?: string;
    /**
     *Province
     */
    province?: string;
    /**
     * nation
     */
    country?: string;
    /**
     * Device type: PC/Mobile
     */
    deviceType?: AuthEnvParams.deviceType;
    /**
     * Operation type: Windows, Android, iOS, MacOS
     */
    systemType?: AuthEnvParams.systemType;
    /**
     * Browser type: IE/Chrome/Firefox
     */
    browserType?: AuthEnvParams.browserType;
    /**
     * Request time
     */
    requestDate?: string;
};

export namespace AuthEnvParams {

    /**
     * Device type: PC/Mobile
     */
    export enum deviceType {
        PC = 'PC',
        MOBILE = 'Mobile',
    }

    /**
     * Operation type: Windows, Android, iOS, MacOS
     */
    export enum systemType {
        WINDOWS = 'Windows',
        MAC_OS = 'MacOS',
        ANDROID = 'Android',
        I_OS = 'iOS',
    }

    /**
     * Browser type: IE/Chrome/Firefox
     */
    export enum browserType {
        IE = 'IE',
        CHROME = 'Chrome',
        FIREFOX = 'Firefox',
        SAFARI = 'Safari',
        EDGE = 'Edge',
        OPERA = 'Opera',
        SAFE360 = 'Safe360',
        QQBROWSER = 'QQBrowser',
    }


}
