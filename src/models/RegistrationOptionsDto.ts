/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PublicKeyCredentialCreationOptionsDto } from './PublicKeyCredentialCreationOptionsDto';

export type RegistrationOptionsDto = {
    /**
     * 认证器生成公钥凭证的参数
     */
    registrationOptions: PublicKeyCredentialCreationOptionsDto;
    /**
     * ticket 需回传，用作向服务器发起验证从认证器获得的创建凭证时的结果
     */
    ticket: string;
};
