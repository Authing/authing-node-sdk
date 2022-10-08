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
     * MFA 认证要素类型，目前共支持短信、邮箱验证码、OTP、人脸四种类型的认证要素。
     */
    factorType: EnrollFactorDto.factorType;
};

export namespace EnrollFactorDto {

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
