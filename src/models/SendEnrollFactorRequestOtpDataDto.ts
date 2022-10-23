/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SendEnrollFactorRequestOtpDataDto = {
    /**
     * OTP Auth Uri
     */
    qrCodeUri: string;
    /**
     * Base64 编码的 OTP 二维码，前端可以用此渲染二维码。
     */
    qrCodeDataUrl: string;
    /**
     * OTP Recovery Code
     */
    recoveryCode: string;
};
