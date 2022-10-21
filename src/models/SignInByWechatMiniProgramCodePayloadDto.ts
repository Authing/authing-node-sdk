/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SignInByWechatMiniProgramCodePayloadDto = {
    /**
     * 获取微信开放数据返回的加密数据（encryptedData）
     */
    encryptedData: string;
    /**
     * 对称解密算法初始向量，由微信返回
     */
    iv: string;
    /**
     * `wx.login` 接口返回的用户 `code`
     */
    code: string;
};
