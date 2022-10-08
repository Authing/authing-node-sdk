/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SignUpByPassCodeDto } from './SignUpByPassCodeDto';
import type { SignUpByPasswordDto } from './SignUpByPasswordDto';
import type { SignupOptionsDto } from './SignupOptionsDto';
import type { SignupProfileDto } from './SignupProfileDto';

export type SignupDto = {
    /**
     * 注册方式：
     * - `PASSWORD`: 邮箱密码方式
     * - `PASSCODE`: 邮箱/手机号验证码方式
     *
     */
    connection: SignupDto.connection;
    /**
     * 当主持方式为 `PASSWORD` 时此参数必填。
     */
    passwordPayload?: SignUpByPasswordDto;
    /**
     * 当认证方式为 `PASSCODE` 时此参数必填
     */
    passCodePayload?: SignUpByPassCodeDto;
    /**
     * 用户资料
     */
    profile?: SignupProfileDto;
    /**
     * 可选参数
     */
    options?: SignupOptionsDto;
};

export namespace SignupDto {

    /**
     * 注册方式：
     * - `PASSWORD`: 邮箱密码方式
     * - `PASSCODE`: 邮箱/手机号验证码方式
     *
     */
    export enum connection {
        PASSWORD = 'PASSWORD',
        PASSCODE = 'PASSCODE',
    }


}
