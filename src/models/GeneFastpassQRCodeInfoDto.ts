/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FastpassUserInfoDto } from './FastpassUserInfoDto';

export type GeneFastpassQRCodeInfoDto = {
    /**
     * QR code usage scenarios.
     */
    scene: string;
    /**
     * The unique ID of the QR code. You can query the status of the QR code through this unique ID.
     */
    qrcodeId: string;
    /**
     * Service interface Host address
     */
    apiHost: string;
    /**
     * User information
     */
    user: FastpassUserInfoDto;
    /**
     * The application ID that the current user logged in when generating the QR code
     */
    appId: string;
    /**
     * User pool information
     */
    userpool: FastpassUserInfoDto;
};
