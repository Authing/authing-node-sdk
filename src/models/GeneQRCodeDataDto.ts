/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GeneQRCodeDataDto = {
    /**
     * The unique ID of the QR code. You can query the status of the QR code through this unique ID.
     */
    qrcodeId: string;
    /**
     * QR code URL, the front end can render the QR code based on this link.
     */
    url: string;
    /**
     * If the mini program scans the QR code to log in, and the request parameter autoMergeQrCode is set to false, the configured custom logo will be returned. The front end can splice this logo into the QR code URL by itself.
     */
    customLogoUrl?: string;
};
