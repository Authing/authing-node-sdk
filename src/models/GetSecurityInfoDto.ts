/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetSecurityInfoDto = {
    /**
     * 密码强度等级
     */
    passwordSecurityLevel: number;
    /**
     * 是否绑定了 MFA
     */
    mfaEnrolled: boolean;
    /**
     * 是否设置了密码
     */
    passwordSet: boolean;
    /**
     * 是否绑定了邮箱
     */
    emailBinded: boolean;
    /**
     * 是否绑定了手机号
     */
    phoneBinded: boolean;
    /**
     * 账号等级评分
     */
    securityScore: number;
};
