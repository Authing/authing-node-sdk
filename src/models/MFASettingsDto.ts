/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MFASettingsDto = {
    /**
     * 开启的 MFA 认证因素列表
     */
    enabledFactors: Array<'OTP' | 'SMS' | 'EMAIL' | 'FACE'>;
};
