/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnrollFactorEnrollmentDataDto } from './EnrollFactorEnrollmentDataDto';

export type EnrollFactorDto = {
    /**
     * 绑定 MFA 认证要素时，对应认证要素要求的验证信息。
     */
    enrollmentData: EnrollFactorEnrollmentDataDto;
    /**
     * 「发起绑定 MFA 认证要素请求」接口返回的 enrollmentToken，此 token 有效时间为一分钟。
     */
    enrollmentToken: string;
    /**
     * MFA 认证要素类型：
     * - `OTP`: OTP
     * - `SMS`: 短信
     * - `EMAIL`: 邮件
     * - `FACE`: 人脸
     *
     */
    factorType: EnrollFactorDto.factorType;
};

export namespace EnrollFactorDto {

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
