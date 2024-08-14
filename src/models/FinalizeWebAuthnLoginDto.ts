/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthenticationCredentialDto } from './AuthenticationCredentialDto';
import type { SignInByWebAuthnOptionsDto } from './SignInByWebAuthnOptionsDto';

export type FinalizeWebAuthnLoginDto = {
    /**
     * 从 获取 WebAuthn 认证请求初始化参数接口 获得的 ticket
     */
    ticket: string;
    /**
     * 认证器凭证信息
     */
    credential: AuthenticationCredentialDto;
    /**
     * 可选参数
     */
    options?: SignInByWebAuthnOptionsDto;
};
