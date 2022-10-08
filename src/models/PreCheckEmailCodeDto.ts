/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PreCheckEmailCodeDto = {
    /**
     * 邮箱，不区分大小写
     */
    email: string;
    /**
     * 邮箱验证码
     */
    passCode: string;
    /**
     * 短信通道，指定发送此短信的目的，如 CHANNEL_LOGIN 用于登录、CHANNEL_REGISTER 用于注册。
     */
    channel: PreCheckEmailCodeDto.channel;
};

export namespace PreCheckEmailCodeDto {

    /**
     * 短信通道，指定发送此短信的目的，如 CHANNEL_LOGIN 用于登录、CHANNEL_REGISTER 用于注册。
     */
    export enum channel {
        CHANNEL_LOGIN = 'CHANNEL_LOGIN',
        CHANNEL_REGISTER = 'CHANNEL_REGISTER',
        CHANNEL_RESET_PASSWORD = 'CHANNEL_RESET_PASSWORD',
        CHANNEL_VERIFY_EMAIL_LINK = 'CHANNEL_VERIFY_EMAIL_LINK',
        CHANNEL_BIND_EMAIL = 'CHANNEL_BIND_EMAIL',
        CHANNEL_UNBIND_EMAIL = 'CHANNEL_UNBIND_EMAIL',
        CHANNEL_VERIFY_MFA = 'CHANNEL_VERIFY_MFA',
        CHANNEL_UNLOCK_ACCOUNT = 'CHANNEL_UNLOCK_ACCOUNT',
        CHANNEL_COMPLETE_EMAIL = 'CHANNEL_COMPLETE_EMAIL',
    }


}
