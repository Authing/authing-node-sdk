/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthenticateByADDto } from './AuthenticateByADDto';
import type { AuthenticateByLDAPDto } from './AuthenticateByLDAPDto';
import type { AuthenticateByPassCodeDto } from './AuthenticateByPassCodeDto';
import type { AuthenticateByPasswordDto } from './AuthenticateByPasswordDto';
import type { SignInOptionsDto } from './SignInOptionsDto';

export type LoginByCredentialsDto = {
    /**
     * 认证方式：
     * - `PASSWORD`: 使用密码方式进行认证。
     * - `PASSCODE`: 使用一次性临时验证码进行认证。
     * - `LDAP`: 基于 LDAP 用户目录进行认证。
     * - `AD`: 基于 Windows AD 用户目录进行认证。
     *
     */
    connection: LoginByCredentialsDto.connection;
    /**
     * 当认证方式为 `PASSWORD` 时此参数必填。
     */
    passwordPayload?: AuthenticateByPasswordDto;
    /**
     * 当认证方式为 `PASSCODE` 时此参数必填
     */
    passCodePayload?: AuthenticateByPassCodeDto;
    /**
     * 当认证方式为 `AD` 时此参数必填
     */
    adPayload?: AuthenticateByADDto;
    /**
     * 当认证方式为 `LDAP` 时此参数必填
     */
    ldapPayload?: AuthenticateByLDAPDto;
    /**
     * 可选参数
     */
    options?: SignInOptionsDto;
};

export namespace LoginByCredentialsDto {

    /**
     * 认证方式：
     * - `PASSWORD`: 使用密码方式进行认证。
     * - `PASSCODE`: 使用一次性临时验证码进行认证。
     * - `LDAP`: 基于 LDAP 用户目录进行认证。
     * - `AD`: 基于 Windows AD 用户目录进行认证。
     *
     */
    export enum connection {
        PASSWORD = 'PASSWORD',
        PASSCODE = 'PASSCODE',
        LDAP = 'LDAP',
        AD = 'AD',
    }


}
