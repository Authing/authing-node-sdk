/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetWechatMiniProgramPhoneDto = {
    /**
     * External identity source connection identifier of WeChat applet
     */
    extIdpConnidentifier: string;
    /**
     * `code` returned by `open-type=getphonecode` interface
     */
    code: string;
};
