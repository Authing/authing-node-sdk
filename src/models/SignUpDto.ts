/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SignUpByPassCodeDto } from './SignUpByPassCodeDto';
import type { SignUpByPasswordDto } from './SignUpByPasswordDto';
import type { SignUpOptionsDto } from './SignUpOptionsDto';
import type { SignUpProfileDto } from './SignUpProfileDto';

export type SignUpDto = {
    /**
     * 注册方式：
     * - `PASSWORD`: 邮箱密码方式
     * - `PASSCODE`: 邮箱/手机号验证码方式
     *
     */
    connection: SignUpDto.connection;
    /**
     * 当注册方式为 `PASSWORD` 时此参数必填。
     */
    passwordPayload?: SignUpByPasswordDto;
    /**
     * 当认证方式为 `PASSCODE` 时此参数必填
     */
    passCodePayload?: SignUpByPassCodeDto;
    /**
     * 用户资料
     */
    profile?: SignUpProfileDto;
    /**
     * 可选参数
     */
    options?: SignUpOptionsDto;
};

export namespace SignUpDto {

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
