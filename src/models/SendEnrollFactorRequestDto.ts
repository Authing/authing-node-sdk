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
     * MFA 认证要素类型：
     * - `OTP`: OTP
     * - `SMS`: 短信
     * - `EMAIL`: 邮件
     * - `FACE`: 人脸
     *
     */
    factorType: SendEnrollFactorRequestDto.factorType;
};

export namespace SendEnrollFactorRequestDto {

    /**
     * MFA 认证要素类型：
     * - `OTP`: OTP
     * - `SMS`: 短信
     * - `EMAIL`: 邮件
     * - `FACE`: 人脸
     *
     */
    export enum factorType {
        OTP = 'OTP',
        SMS = 'SMS',
        EMAIL = 'EMAIL',
        FACE = 'FACE',
    }


}
