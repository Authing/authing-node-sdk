/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnrollFactorEnrollmentDataDto } from './EnrollFactorEnrollmentDataDto';

export type EnrollFactorDto = {
    /**
     * When binding MFA authentication elements, the verification information required by the corresponding authentication elements.
     */
    enrollmentData: EnrollFactorEnrollmentDataDto;
    /**
     * The enrollmentToken returned by the "Initiate a request to bind MFA authentication elements" interface. This token is valid for one minute.
     */
    enrollmentToken: string;
    /**
     * MFA Certification Element Type:
     * - `OTP`: OTP
     * - `SMS`: text message
     * - `EMAIL`: email
     * - `FACE`: human face
     *
     */
    factorType: EnrollFactorDto.factorType;
};

export namespace EnrollFactorDto {

    /**
     * MFA Certification Element Type:
     * - `OTP`: OTP
     * - `SMS`: text message
     * - `EMAIL`: email
     * - `FACE`: human face
     *
     */
    export enum factorType {
        OTP = 'OTP',
        SMS = 'SMS',
        EMAIL = 'EMAIL',
        FACE = 'FACE',
    }


}
