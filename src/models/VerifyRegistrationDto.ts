/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RegistrationCredentialDto } from './RegistrationCredentialDto';

export type VerifyRegistrationDto = {
    /**
     * 获取凭证创建初始化参数时的 ticket
     */
    ticket: string;
    /**
     * 绑定认证器凭证信息
     */
    registrationCredential: RegistrationCredentialDto;
    /**
     * 凭证信息类型：
     * - `FINGERPRINT`: 指纹
     * - `FACE`: 人脸
     * - `OTHER` 其他
     */
    authenticatorCode?: VerifyRegistrationDto.authenticatorCode;
};

export namespace VerifyRegistrationDto {

    /**
     * 凭证信息类型：
     * - `FINGERPRINT`: 指纹
     * - `FACE`: 人脸
     * - `OTHER` 其他
     */
    export enum authenticatorCode {
        FINGERPRINT = 'fingerprint',
        FACE = 'face',
        OTHER = 'other',
    }


}
