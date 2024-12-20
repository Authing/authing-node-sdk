/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EnrollFactorEnrollmentDataDto = {
    /**
     * This parameter needs to be passed when binding SMS, email verification code, and OTP type authentication elements. The value is SMS/email/OTP verification code.
     */
    passCode?: string;
    /**
     * This parameter needs to be passed when binding FACE type authentication elements. The value is the link to the bound face image.
     */
    photo?: string;
    /**
     * This parameter needs to be passed when binding FACE type authentication elements. Whether it is an external link image.
     */
    isExternalPhoto?: boolean;
};
