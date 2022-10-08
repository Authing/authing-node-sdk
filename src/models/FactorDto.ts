/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type FactorDto = {
    /**
     * MFA 认证要素ID
     */
    factorId: string;
    /**
     * MFA 认证要素类型
     */
    factorType: FactorDto.factorType;
    /**
     * MFA 认证要素信息
     */
    profile: any;
};

export namespace FactorDto {

    /**
     * MFA 认证要素类型
     */
    export enum factorType {
        OTP = 'OTP',
        SMS = 'SMS',
        EMAIL = 'EMAIL',
        FACE = 'FACE',
    }


}
