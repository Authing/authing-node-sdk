/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type FactorToEnrollDto = {
    /**
     * MFA Factor 类型
     */
    factorType: FactorToEnrollDto.factorType;
};

export namespace FactorToEnrollDto {

    /**
     * MFA Factor 类型
     */
    export enum factorType {
        OTP = 'OTP',
        SMS = 'SMS',
        EMAIL = 'EMAIL',
        FACE = 'FACE',
    }


}
