/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BindPhoneDto = {
    /**
     * 短信验证码，注意一个短信验证码指南使用一次，且有过期时间。
     */
    passCode: string;
    /**
     * 手机号，不带区号。如果是国外手机号，请在 phoneCountryCode 参数中指定区号。
     */
    phoneNumber: string;
    /**
     * 手机区号，中国大陆手机号可不填。Authing 短信服务暂不内置支持国际手机号，你需要在 Authing 控制台配置对应的国际短信服务。完整的手机区号列表可参阅 https://en.wikipedia.org/wiki/List_of_country_calling_codes。
     */
    phoneCountryCode?: string;
};
