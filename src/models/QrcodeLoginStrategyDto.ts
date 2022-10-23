/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type QrcodeLoginStrategyDto = {
    /**
     * 二维码有效时间（秒）
     */
    qrcodeExpiresIn: number;
    /**
     * ticket 有效时间（秒）
     */
    ticketExpiresIn: number;
    /**
     * Web 轮询接口返回完整用户信息，详情见此文档：Web 轮询接口返回完整用户信息
     */
    allowExchangeUserInfoFromBrowser: boolean;
    /**
     * 允许在浏览器使用 ticket 换取用户信息，详情见此文档：Web 轮询接口返回完整用户信息
     */
    returnFullUserInfo: boolean;
};
