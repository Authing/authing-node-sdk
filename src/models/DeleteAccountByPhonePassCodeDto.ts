/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeleteAccountByPhonePassCodeDto = {
    /**
     * 此账号绑定的手机号，不带区号。如果是国外手机号，请在 phoneCountryCode 参数中指定区号。
     */
    phoneNumber: string;
    /**
     * 短信验证码，一个短信验证码只能使用一次，有效时间为一分钟。你需要通过**发送短信**接口获取。
     */
    passCode: string;
    /**
     * 手机区号
     */
    phoneCountryCode?: string;
};
