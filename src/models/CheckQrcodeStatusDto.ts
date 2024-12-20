/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The return format is not standardized. It is recommended to use /api/v3/get-qrcode-status. According to the order of user scanning code, it is divided into unscanned code, scanned code and waiting for user confirmation, user consent/cancellation of authorization, QR code expiration and There are six states of unknown errors. The front end should give different feedback to users through different states. You can learn about the detailed process of scanning QR code to log in through the following article: https://docs.authing.cn/v2/concepts/how-qrcode-works.html.
 */
export type CheckQrcodeStatusDto = {
    /**
     * QR code unique ID
     */
    qrcodeId?: any;
};
