/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserLoginHistoryDto = {
    /**
     * App ID
     */
    appId: string;
    /**
     * App 名称
     */
    appName: string;
    /**
     * App Logo
     */
    appLogo: string;
    /**
     * App 登录地址
     */
    appLoginUrl: string;
    /**
     * 客户端 IP
     */
    clientIp: string;
    /**
     * 登录时使用的 user agent
     */
    userAgent?: string;
    /**
     * 登录时间
     */
    time: string;
};
