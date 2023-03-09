/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 按照用户扫码顺序，共分为未扫码、已扫码、已登录、二维码过期以及未知错误五种状态，前端应该通过不同的状态给到用户不同的反馈。
 */
export type GetAppLoginQrcodeStatusDto = {
    /**
     * 二维码唯一 ID
     */
    qrcodeId?: any;
};
