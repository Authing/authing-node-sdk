/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AuthEnvParams = {
    /**
     * ip
     */
    ip?: string;
    /**
     * 城市
     */
    city?: string;
    /**
     * 省份
     */
    province?: string;
    /**
     * 国家
     */
    country?: string;
    /**
     * 设备类型：PC/Mobile
     */
    deviceType?: AuthEnvParams.deviceType;
    /**
     * 操作类型：Windows、Android、iOS、MacOS
     */
    systemType?: AuthEnvParams.systemType;
    /**
     * 浏览器类型：IE/Chrome/Firefox
     */
    browserType?: AuthEnvParams.browserType;
    /**
     * 请求时间
     */
    requestDate?: string;
};

export namespace AuthEnvParams {

    /**
     * 设备类型：PC/Mobile
     */
    export enum deviceType {
        PC = 'PC',
        MOBILE = 'Mobile',
    }

    /**
     * 操作类型：Windows、Android、iOS、MacOS
     */
    export enum systemType {
        WINDOWS = 'Windows',
        MAC_OS = 'MacOS',
        ANDROID = 'Android',
        I_OS = 'iOS',
    }

    /**
     * 浏览器类型：IE/Chrome/Firefox
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
