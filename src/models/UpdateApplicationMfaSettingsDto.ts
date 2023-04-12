/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateApplicationMfaSettingsDto = {
    /**
     * 所属应用 ID
     */
    appId: string;
    /**
     * 开启的 MFA 认证因素列表
     */
    enabledFactors?: Array<'OTP' | 'SMS' | 'EMAIL' | 'FACE'>;
    /**
     * 关闭的 MFA 认证因素列表
     */
    disabledFactors?: Array<'OTP' | 'SMS' | 'EMAIL' | 'FACE'>;
};
