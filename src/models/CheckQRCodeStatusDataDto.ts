/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LoginTokenResponseDataDto } from './LoginTokenResponseDataDto';
import type { QRCodeStatusBriefUserInfoDto } from './QRCodeStatusBriefUserInfoDto';

export type CheckQRCodeStatusDataDto = {
    /**
     * QR code status. According to the order of user scanning, there are six states: PENDING (not scanned), SCANNED (scanned and waiting for user confirmation), AUTHORIZED (user authorized), CANCELLED (cancelled authorization), EXPIRED (QR code expired) and ERROR (unknown error).
     */
    status: CheckQRCodeStatusDataDto.status;
    /**
     * Returned when the QR code status is authorized. If "Web polling interface returns complete user information" is not enabled in console application security - general security - login security - APP scan code login Web security (off by default), this ticket will be returned to exchange for complete user information.
     */
    ticket?: string;
    briefUserInfo?: QRCodeStatusBriefUserInfoDto;
    /**
     * This data will be returned only when the QR code status is authorized and the "Web polling interface returns complete user information" switch is enabled in console application security - general security - login security - APP scan code login Web security (off by default). It is recommended to use ticket to exchange for user information.
     */
    tokenSet?: LoginTokenResponseDataDto;
};

export namespace CheckQRCodeStatusDataDto {

    /**
     * QR code status. According to the order in which the user scans the code, there are six states: PENDING (not scanned), SCANNED (scanned and waiting for user confirmation), AUTHORIZED (user authorized), CANCELLED (authorization canceled), EXPIRED (QR code expired), and ERROR (unknown error).
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
