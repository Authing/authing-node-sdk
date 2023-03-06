/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PublicKeyCredentialDescriptorDto } from './PublicKeyCredentialDescriptorDto';
import type { PublicKeyCredentialParametersDto } from './PublicKeyCredentialParametersDto';
import type { PublicKeyCredentialRpEntityDto } from './PublicKeyCredentialRpEntityDto';
import type { PublicKeyCredentialUserEntityDto } from './PublicKeyCredentialUserEntityDto';

export type PublicKeyCredentialCreationOptionsDto = {
    /**
     * 挑战码, base64Url 编码
     */
    challenge: string;
    /**
     * 用于标识要排除的凭证，可以避免同一个用户多次注册同一个认证器
     */
    excludeCredentials: Array<PublicKeyCredentialDescriptorDto>;
    /**
     * 算法列表，指明信赖方接受哪些签名算法
     */
    pubKeyCredParams: Array<PublicKeyCredentialParametersDto>;
    /**
     * 信赖方信息
     */
    rp: PublicKeyCredentialRpEntityDto;
    /**
     * 超时时间(毫秒值)
     */
    timeout: number;
    /**
     * 用户信息
     */
    user: PublicKeyCredentialUserEntityDto;
};
