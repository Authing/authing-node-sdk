/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PrincipalAuthenticationInfoDto = {
    /**
     * 是否进行认证
     */
    authenticated: boolean;
    /**
     * 用户 ID
     */
    principalType: string;
    /**
     * 认证主体证件号码
     */
    principalCode: string;
    /**
     * 认证主体名称
     */
    principalName: string;
    /**
     * 认证时间，标准时间字符串
     */
    authenticatedAt: string;
};
