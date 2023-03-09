/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WechatMobileAuthByCodeInput = {
    /**
     * 客户端微信授权成功，微信返回当前认证授权码
     */
    code: string;
    /**
     * 应用 ID
     */
    appId?: string;
    /**
     * 身份源连接 ID
     */
    connId?: string;
};
