/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetWechatMiniProgramPhoneDto = {
    /**
     * 微信小程序的外部身份源连接标志符
     */
    extIdpConnidentifier: string;
    /**
     * `open-type=getphonecode` 接口返回的 `code`
     */
    code: string;
};
