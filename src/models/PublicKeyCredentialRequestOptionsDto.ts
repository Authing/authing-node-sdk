/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PublicKeyCredentialDescriptorDto } from './PublicKeyCredentialDescriptorDto';

export type PublicKeyCredentialRequestOptionsDto = {
    /**
     * 挑战码, base64Url 编码
     */
    challenge: string;
    /**
     * 认证器认证参数
     */
    allowCredentials?: Array<PublicKeyCredentialDescriptorDto>;
    /**
     * 信赖方 ID，和注册认证器时一致
     */
    rpId: string;
    /**
     * 超时时间(毫秒值)
     */
    timeout: number;
};
