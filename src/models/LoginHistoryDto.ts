/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GeoIp } from './GeoIp';
import type { ParsedUserAgent } from './ParsedUserAgent';

export type LoginHistoryDto = {
    /**
     * 用户 ID
     */
    userId: string;
    /**
     * 应用 ID
     */
    appId: string;
    /**
     * 应用名称
     */
    appName: string;
    /**
     * 应用登录地址
     */
    appLoginUrl: string;
    /**
     * 应用 Logo
     */
    appLogo: string;
    /**
     * 登录时间
     */
    loginAt: string;
    /**
     * 登录时使用的客户端 IP
     */
    clientIp: string;
    /**
     * 是否登录成功
     */
    success: boolean;
    /**
     * 登录失败时的具体错误信息
     */
    errorMessage?: string;
    /**
     * User Agent
     */
    userAgent: string;
    /**
     * 解析过后的 User Agent
     */
    parsedUserAgent: ParsedUserAgent;
    /**
     * 使用的登录方式
     */
    loginMethod: string;
    /**
     * 地理位置
     */
    geoip: GeoIp;
};
