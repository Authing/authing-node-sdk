/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 按照用户扫码顺序，共分为未扫码、已扫码等待用户确认、用户同意/取消授权、二维码过期以及未知错误六种状态，前端应该通过不同的状态给到用户不同的反馈。你可以通过下面这篇文章了解扫码登录详细的流程：https://docs.authing.cn/v2/concepts/how-qrcode-works.html.
 */
export type GetQrcodeStatusDto = {
    /**
     * 二维码唯一 ID
     */
    qrcodeId?: any;
};
