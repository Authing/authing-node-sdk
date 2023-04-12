/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApplicationMfaDto } from './ApplicationMfaDto';

export type GetMfaInfoDataDto = {
    /**
     * MFA Token
     */
    mfaToken: string;
    /**
     * MFA 绑定的手机号
     */
    mfaPhone?: string;
    /**
     * MFA 绑定的手机区号
     */
    mfaPhoneCountryCode?: string;
    /**
     * MFA 绑定的邮箱
     */
    mfaEmail?: string;
    /**
     * 用户昵称
     */
    nickname?: string;
    /**
     * 用户名
     */
    username?: string;
    /**
     * 用户手机号
     */
    phone?: string;
    /**
     * 用户手机区号
     */
    phoneCountryCode?: string;
    /**
     * 人脸校验是否开启
     */
    faceMfaEnabled?: boolean;
    /**
     * OTP 校验是否开启
     */
    totpMfaEnabled?: boolean;
    /**
     * MFA Factor 列表
     */
    applicationMfa: Array<ApplicationMfaDto>;
};
