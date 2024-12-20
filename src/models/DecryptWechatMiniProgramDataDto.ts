/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DecryptWechatMiniProgramDataDto = {
    /**
     * User `code` returned by `wx.login` interface
     */
    code: string;
    /**
     * Initial vector of symmetric decryption algorithm, returned by WeChat
     */
    iv: string;
    /**
     * Get the encrypted data (encryptedData) returned by WeChat open data
     */
    encryptedData: string;
    /**
     * External identity source connection identifier of WeChat applet
     */
    extIdpConnidentifier: string;
};
