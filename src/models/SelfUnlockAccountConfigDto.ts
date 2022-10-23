/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SelfUnlockAccountConfigDto = {
    /**
     * 是否允许用户自助解锁账号。
     */
    enabled: boolean;
    /**
     * 自助解锁方式，目前支持原密码 + 验证码和验证码两种方式。
     */
    strategy: SelfUnlockAccountConfigDto.strategy;
};

export namespace SelfUnlockAccountConfigDto {

    /**
     * 自助解锁方式，目前支持原密码 + 验证码和验证码两种方式。
     */
    export enum strategy {
        CAPTCHA = 'captcha',
        PASSWORD_CAPTCHA = 'password-captcha',
    }


}
