/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SendEmailDto = {
    /**
     * 短信通道，指定发送此短信的目的：
     * - `CHANNEL_LOGIN`: 用户用户登录
     * - `CHANNEL_REGISTER`: 用于用户注册
     * - `CHANNEL_RESET_PASSWORD`: 用于重置密码
     * - `CHANNEL_VERIFY_EMAIL_LINK`: 用于验证邮箱地址
     * - `CHANNEL_UPDATE_EMAIL`: 用于修改邮箱
     * - `CHANNEL_BIND_EMAIL`: 用于绑定邮箱
     * - `CHANNEL_UNBIND_EMAIL`: 用于解绑邮箱
     * - `CHANNEL_VERIFY_MFA`: 用于验证 MFA
     * - `CHANNEL_UNLOCK_ACCOUNT`: 用于自助解锁
     * - `CHANNEL_COMPLETE_EMAIL`: 用于注册/登录时补全邮箱信息
     *
     */
    channel: SendEmailDto.channel;
    /**
     * 邮箱，不区分大小写
     */
    email: string;
};

export namespace SendEmailDto {

    /**
     * 短信通道，指定发送此短信的目的：
     * - `CHANNEL_LOGIN`: 用户用户登录
     * - `CHANNEL_REGISTER`: 用于用户注册
     * - `CHANNEL_RESET_PASSWORD`: 用于重置密码
     * - `CHANNEL_VERIFY_EMAIL_LINK`: 用于验证邮箱地址
     * - `CHANNEL_UPDATE_EMAIL`: 用于修改邮箱
     * - `CHANNEL_BIND_EMAIL`: 用于绑定邮箱
     * - `CHANNEL_UNBIND_EMAIL`: 用于解绑邮箱
     * - `CHANNEL_VERIFY_MFA`: 用于验证 MFA
     * - `CHANNEL_UNLOCK_ACCOUNT`: 用于自助解锁
     * - `CHANNEL_COMPLETE_EMAIL`: 用于注册/登录时补全邮箱信息
     *
     */
    export enum channel {
        CHANNEL_LOGIN = 'CHANNEL_LOGIN',
        CHANNEL_REGISTER = 'CHANNEL_REGISTER',
        CHANNEL_RESET_PASSWORD = 'CHANNEL_RESET_PASSWORD',
        CHANNEL_VERIFY_EMAIL_LINK = 'CHANNEL_VERIFY_EMAIL_LINK',
        CHANNEL_UPDATE_EMAIL = 'CHANNEL_UPDATE_EMAIL',
        CHANNEL_BIND_EMAIL = 'CHANNEL_BIND_EMAIL',
        CHANNEL_UNBIND_EMAIL = 'CHANNEL_UNBIND_EMAIL',
        CHANNEL_VERIFY_MFA = 'CHANNEL_VERIFY_MFA',
        CHANNEL_UNLOCK_ACCOUNT = 'CHANNEL_UNLOCK_ACCOUNT',
        CHANNEL_COMPLETE_EMAIL = 'CHANNEL_COMPLETE_EMAIL',
    }


}
