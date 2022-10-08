/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GeneQRCodeDataDto = {
    /**
     * 二维码唯一 ID，可以通过此唯一 ID 查询二维码状态。
     */
    qrcodeId: string;
    /**
     * 二维码 URL，前端可以基于此链接渲染二维码。
     */
    url: string;
    /**
     * 如果是小程序扫码登录，并且请求参数 autoMergeQrCode 设置为 false，会返回配置的自定义 Logo，前端可以自行将此 Logo 拼接到二维码 URL 上。
     */
    customLogoUrl?: string;
};
