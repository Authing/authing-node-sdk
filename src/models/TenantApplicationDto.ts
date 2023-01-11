/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TenantApplicationDto = {
    /**
     * UserPool ID
     */
    userPoolId: string;
    /**
     * App ID
     */
    tenantAppId: string;
    /**
     * App 名称
     */
    name: string;
    /**
     * 应用描述信息
     */
    description?: string;
    /**
     * App Logo
     */
    logo: string;
    /**
     * 应用类型
     */
    applicationType: string;
    /**
     * 是否开启 SSO 单点登录
     */
    ssoEnabled: boolean;
    /**
     * App ID
     */
    appId: string;
};
