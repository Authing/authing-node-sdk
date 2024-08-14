/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MFADisableSettingsDto = {
    /**
     * 关闭的 MFA 认证因素列表
     */
    disableFactors: Array<'OTP' | 'SMS' | 'EMAIL' | 'FACE'>;
};
