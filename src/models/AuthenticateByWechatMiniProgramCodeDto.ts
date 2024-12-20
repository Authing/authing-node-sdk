/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AuthenticateByWechatMiniProgramCodeDto = {
    /**
     * Get the encrypted data (encryptedData) returned by WeChat open data
     */
    encryptedData: string;
    /**
     * Initial vector of symmetric decryption algorithm, returned by WeChat
     */
    iv: string;
    /**
     * User `code` returned by `wx.login` interface
     */
    code: string;
};
