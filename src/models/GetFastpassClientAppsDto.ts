/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * This endpoint is used to use the Authing Token APP to scan the "User Personal Center" - "Quick Authentication" QR code to pull the list of client applications that can be quickly authenticated.
 */
export type GetFastpassClientAppsDto = {
    qrcodeId?: any;
    appId?: any;
};
