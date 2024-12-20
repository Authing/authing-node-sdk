/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DecryptDouyinMiniProgramDataDto = {
    /**
     * User `code` returned by `tt.login` interface
     */
    code: string;
    /**
     * Initial vector of symmetric decryption algorithm, returned by Douyin
     */
    iv: string;
    /**
     * Get the encrypted data (encryptedData) returned by Douyin open data
     */
    encryptedData: string;
    /**
     * External identity source connection identifier of Douyin applet
     */
    extIdpConnidentifier: string;
};
