/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 此端点用于使用 Authing 令牌 APP 扫「用户个人中心」-「快速认证」二维码后，拉取可快速认证的客户端应用列表。
 */
export type GetFastpassClientAppsDto = {
    qrcodeId?: any;
    appId?: any;
};
