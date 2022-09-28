/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ApplicationRegisterConfigInputDto = {
    /**
     * 开启的注册方式
     */
    enabledBasicRegisterMethods: Array<'PHONE_CODE' | 'EMAIL_CODE' | 'EMAIL_PASSWORD'>;
    /**
     * 默认的注册类型
     * - `PASSWORD`: 密码类型，支持邮箱 + 密码进行登录
     * - `PASSCODE`: 验证码类型，取决于你开启的注册方式，支持手机号/邮箱 + 验证码进行登录
     *
     */
    defaultRegisterMethod: ApplicationRegisterConfigInputDto.defaultRegisterMethod;
};

export namespace ApplicationRegisterConfigInputDto {

    /**
     * 默认的注册类型
     * - `PASSWORD`: 密码类型，支持邮箱 + 密码进行登录
     * - `PASSCODE`: 验证码类型，取决于你开启的注册方式，支持手机号/邮箱 + 验证码进行登录
     *
     */
    export enum defaultRegisterMethod {
        PASSCODE = 'PASSCODE',
        PASSWORD = 'PASSWORD',
    }


}
