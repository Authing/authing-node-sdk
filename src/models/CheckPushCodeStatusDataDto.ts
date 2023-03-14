/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LoginTokenResponseDataDto } from './LoginTokenResponseDataDto';

export type CheckPushCodeStatusDataDto = {
    /**
     * 推送码状态。按照推送登录顺序，共分为 PUSHED(已推送)、AUTHORIZED(用户已授权)、CANCELLED(取消授权)、EXPIRED(推送登录过期)以及 ERROR(未知错误)五种状态。
     */
    status: CheckPushCodeStatusDataDto.status;
    /**
     * 当推送码状态为已授权，此数据才会返回。
     */
    tokenSet?: LoginTokenResponseDataDto;
};

export namespace CheckPushCodeStatusDataDto {

    /**
     * 推送码状态。按照推送登录顺序，共分为 PUSHED(已推送)、AUTHORIZED(用户已授权)、CANCELLED(取消授权)、EXPIRED(推送登录过期)以及 ERROR(未知错误)五种状态。
     */
    export enum status {
        PUSHED = 'PUSHED',
        AUTHORIZED = 'AUTHORIZED',
        CANCELLED = 'CANCELLED',
        EXPIRED = 'EXPIRED',
        ERROR = 'ERROR',
    }


}
