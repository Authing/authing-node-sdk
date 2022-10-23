/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PreCheckSmsCodeDto = {
    /**
     * 手机号，不带区号。如果是国外手机号，请在 phoneCountryCode 参数中指定区号。
     */
    phone: string;
    /**
     * 短信验证码
     */
    passCode: string;
    /**
     * 手机区号，中国大陆手机号可不填。Authing 短信服务暂不内置支持国际手机号，你需要在 Authing 控制台配置对应的国际短信服务。完整的手机区号列表可参阅 https://en.wikipedia.org/wiki/List_of_country_calling_codes。
     */
    phoneCountryCode?: string;
    /**
     * 短信通道，指定发送此短信的目的，如 CHANNEL_LOGIN 用于登录、CHANNEL_REGISTER 用于注册。
     */
    channel: PreCheckSmsCodeDto.channel;
};

export namespace PreCheckSmsCodeDto {

    /**
     * 短信通道，指定发送此短信的目的，如 CHANNEL_LOGIN 用于登录、CHANNEL_REGISTER 用于注册。
     */
    export enum channel {
        CHANNEL_LOGIN = 'CHANNEL_LOGIN',
        CHANNEL_REGISTER = 'CHANNEL_REGISTER',
        CHANNEL_RESET_PASSWORD = 'CHANNEL_RESET_PASSWORD',
        CHANNEL_BIND_PHONE = 'CHANNEL_BIND_PHONE',
        CHANNEL_UNBIND_PHONE = 'CHANNEL_UNBIND_PHONE',
        CHANNEL_BIND_MFA = 'CHANNEL_BIND_MFA',
        CHANNEL_VERIFY_MFA = 'CHANNEL_VERIFY_MFA',
        CHANNEL_UNBIND_MFA = 'CHANNEL_UNBIND_MFA',
        CHANNEL_COMPLETE_PHONE = 'CHANNEL_COMPLETE_PHONE',
        CHANNEL_IDENTITY_VERIFICATION = 'CHANNEL_IDENTITY_VERIFICATION',
        CHANNEL_DELETE_ACCOUNT = 'CHANNEL_DELETE_ACCOUNT',
    }


}
