/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type QrcodeLoginStrategyDto = {
    /**
     * 二维码有效时间，单位秒
     */
    qrcodeExpiresIn: number;
    /**
     * 时间长度单位，Second/Minute/Hour/Day，仅做显示用
     */
    qrcodeExpiresInUnit?: string;
    /**
     * ticket 有效时间，单位秒
     */
    ticketExpiresIn: number;
    /**
     * 时间长度单位，Second/Minute/Hour/Day，仅作显示用
     */
    ticketExpiresInUnit?: string;
    /**
     * Web 轮询接口返回完整用户信息，详情见此文档：Web 轮询接口返回完整用户信息
     */
    allowExchangeUserInfoFromBrowser: boolean;
    /**
     * 允许在浏览器使用 ticket 换取用户信息，详情见此文档：Web 轮询接口返回完整用户信息
     */
    returnFullUserInfo: boolean;
};
