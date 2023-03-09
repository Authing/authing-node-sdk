/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PublicKeyCredentialRequestOptionsDto } from './PublicKeyCredentialRequestOptionsDto';

export type AuthenticationOptionsDto = {
    /**
     * 认证器认证参数
     */
    authenticationOptions: PublicKeyCredentialRequestOptionsDto;
    /**
     * ticket 需回传，用作向服务器发起验证从认证器获得的认证结果
     */
    ticket: string;
};
