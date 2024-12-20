/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type FactorToEnrollDto = {
    /**
     * MFA Factor Type
     */
    factorType: FactorToEnrollDto.factorType;
};

export namespace FactorToEnrollDto {

    /**
     * MFA Factor Type
     */
    export enum factorType {
        OTP = 'OTP',
        SMS = 'SMS',
        EMAIL = 'EMAIL',
        FACE = 'FACE',
    }


}
