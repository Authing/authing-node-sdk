/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * According to the order in which the user scans the code, it is divided into six states: unscanned code, scanned code and waiting for user confirmation, user consent/cancellation of authorization, QR code expiration and unknown error. The front end should give different feedback to the user through different states. . You can learn about the detailed process of scanning QR code to log in through the following article: https://docs.authing.cn/v2/concepts/how-qrcode-works.html.
 */
export type GetQrcodeStatusDto = {
    /**
     * QR code unique ID
     */
    qrcodeId?: any;
};
