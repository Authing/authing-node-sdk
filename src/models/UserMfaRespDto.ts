/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserMfaRespDto = {
    /**
     * 是否绑定了 TOTP，可选值 enabled, disabled
     */
    totpStatus: string;
    /**
     * 是否绑定了人脸 MFA，可选值 enabled, disabled
     */
    faceMfaStatus: string;
    /**
     * 是否绑定了 SMS MFA，可选值 enabled, disabled
     */
    smsMfaStatus: string;
    /**
     * 是否绑定了 EMAIL MFA，可选值 enabled, disabled
     */
    emailMfaStatus: string;
};
