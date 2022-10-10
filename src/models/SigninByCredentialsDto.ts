/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthenticateByADDto } from './AuthenticateByADDto';
import type { AuthenticateByLDAPDto } from './AuthenticateByLDAPDto';
import type { AuthenticateByPassCodeDto } from './AuthenticateByPassCodeDto';
import type { AuthenticateByPasswordDto } from './AuthenticateByPasswordDto';
import type { SignInOptionsDto } from './SignInOptionsDto';

export type SigninByCredentialsDto = {
    /**
     * 认证方式：
     * - `PASSWORD`: 使用密码方式进行认证。
     * - `PASSCODE`: 使用一次性临时验证码进行认证。
     * - `LDAP`: 基于 LDAP 用户目录进行认证。
     * - `AD`: 基于 Windows AD 用户目录进行认证。
     *
     */
    connection: SigninByCredentialsDto.connection;
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
    /**
     * 应用 ID。当应用的「换取 token 身份验证方式」配置为 `client_secret_post` 需要传。
     */
    client_id?: string;
    /**
     * 应用密钥。当应用的「换取 token 身份验证方式」配置为 `client_secret_post` 需要传。
     */
    client_secret?: string;
};

export namespace SigninByCredentialsDto {

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
