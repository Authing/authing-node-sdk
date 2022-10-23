/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LoginTokenResponseDataDto } from './LoginTokenResponseDataDto';
import type { QRCodeStatusBriefUserInfoDto } from './QRCodeStatusBriefUserInfoDto';

export type CheckQRCodeStatusDataDto = {
    /**
     * 二维码状态。按照用户扫码顺序，共分为 PENDING(未扫码)、SCANNED(已扫码等待用户确认)、AUTHORIZED(用户已授权)、CANCELLED(取消授权)、EXPIRED(二维码过期)以及 ERROR(未知错误)六种状态。
     */
    status: CheckQRCodeStatusDataDto.status;
    /**
     * 当二维码状态为已授权时返回。如果在控制台应用安全 - 通用安全 - 登录安全 - APP 扫码登录 Web 安全中未开启「Web 轮询接口返回完整用户信息」（默认处于关闭状态），会返回此 ticket，用于换取完整的用户信息。
     */
    ticket?: string;
    briefUserInfo?: QRCodeStatusBriefUserInfoDto;
    /**
     * 当二维码状态为已授权并且在控制台应用安全 - 通用安全 - 登录安全 - APP 扫码登录 Web 安全中开启了「Web 轮询接口返回完整用户信息」（默认处于关闭状态）开关，此数据才会返回。推荐使用 ticket 换取用户信息。
     */
    tokenSet?: LoginTokenResponseDataDto;
};

export namespace CheckQRCodeStatusDataDto {

    /**
     * 二维码状态。按照用户扫码顺序，共分为 PENDING(未扫码)、SCANNED(已扫码等待用户确认)、AUTHORIZED(用户已授权)、CANCELLED(取消授权)、EXPIRED(二维码过期)以及 ERROR(未知错误)六种状态。
     */
    export enum status {
        PENDING = 'PENDING',
        SCANNED = 'SCANNED',
        AUTHORIZED = 'AUTHORIZED',
        CANCELLED = 'CANCELLED',
        EXPIRED = 'EXPIRED',
        ERROR = 'ERROR',
    }


}
