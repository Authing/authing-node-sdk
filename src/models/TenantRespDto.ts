/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TenantRespDto = {
    /**
     * 租户 ID
     */
    tenantId: string;
    /**
     * 用户池 ID
     */
    userPoolId: string;
    /**
     * 租户名
     */
    name: string;
    /**
     * 租户描述
     */
    description?: string;
    /**
     * 租户 logo
     */
    logo: Array<string>;
    /**
     * 用户被租户拒绝登录时显示的提示文案
     */
    rejectHint?: string;
    /**
     * 租户关联的应用 ID
     */
    appIds: Array<string>;
    /**
     * 创建者用户的 ID
     */
    creator: string;
    /**
     * 租户来源的应用 ID，该值不存在时代表租户来源为 Authing 控制台
     */
    sourceAppId: string;
    /**
     * 租户来源
     */
    source: string;
    /**
     * 租户 Code
     */
    code: string;
    /**
     * 租户配置的企业域名
     */
    enterpriseDomains: string;
    /**
     * 创建者基本信息
     */
    creatorDetail?: any;
    /**
     * 来源 app 基本信息
     */
    sourceAppDetail?: any;
};
