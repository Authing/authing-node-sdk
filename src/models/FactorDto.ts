/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type FactorDto = {
    /**
     * MFA authentication element ID
     */
    factorId: string;
    /**
     * MFA Certification Element Type
     */
    factorType: FactorDto.factorType;
    /**
     *MFA certification essentials information
     */
    profile: any;
};

export namespace FactorDto {

    /**
     * MFA Certification Element Type
     */
    export enum factorType {
        OTP = 'OTP',
        SMS = 'SMS',
        EMAIL = 'EMAIL',
        FACE = 'FACE',
    }


}
