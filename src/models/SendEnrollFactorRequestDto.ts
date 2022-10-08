/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FactorProfile } from './FactorProfile';

export type SendEnrollFactorRequestDto = {
    /**
     * MFA 认证要素详细信息
     */
    profile: FactorProfile;
    /**
     * MFA 认证要素类型，目前共支持短信、邮箱验证码、OTP、人脸四种类型的认证要素。
     */
    factorType: SendEnrollFactorRequestDto.factorType;
};

export namespace SendEnrollFactorRequestDto {

    /**
     * MFA 认证要素类型，目前共支持短信、邮箱验证码、OTP、人脸四种类型的认证要素。
     */
    export enum factorType {
        OTP = 'OTP',
        SMS = 'SMS',
        EMAIL = 'EMAIL',
        FACE = 'FACE',
    }


}
