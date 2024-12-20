/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * According to the order in which the user scans the code, it is divided into five states: unscanned code, scanned code, logged in, expired QR code and unknown error. The front end should give different feedback to the user through different states.
 */
export type GetAppLoginQrcodeStatusDto = {
    /**
     * QR code unique ID
     */
    qrcodeId?: any;
};
