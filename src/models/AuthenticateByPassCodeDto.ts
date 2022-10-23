/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AuthenticateByPassCodeDto = {
    /**
     * 一次性临时验证码，你需要先调用发送短信或者发送邮件接口获取验证码。
     */
    passCode: string;
    /**
     * 邮箱，不区分大小写。
     */
    email?: string;
    /**
     * 手机号
     */
    phone?: string;
    /**
     * 手机区号，中国大陆手机号可不填。Authing 短信服务暂不内置支持国际手机号，你需要在 Authing 控制台配置对应的国际短信服务。完整的手机区号列表可参阅 https://en.wikipedia.org/wiki/List_of_country_calling_codes。
     */
    phoneCountryCode?: string;
};
