/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateTenantDto = {
    /**
     * 租户名
     */
    name: string;
    /**
     * 租户关联的应用 ID
     */
    appIds: Array<string>;
    /**
     * 租户 logo
     */
    logo?: Array<string>;
    /**
     * 租户描述
     */
    description?: string;
    /**
     * 用户被租户拒绝登录时显示的提示文案
     */
    rejectHint?: string;
    /**
     * 租户来源的应用 ID，该值不存在时代表租户来源为 Authing 控制台
     */
    sourceAppId?: string;
    /**
     * 企业邮箱域名
     */
    enterpriseDomains?: Array<string>;
    /**
     * 租户过期时间
     */
    expireTime?: string;
    /**
     * 租户 MAU 上限
     */
    mauAmount?: number;
    /**
     * 租户成员上限
     */
    memberAmount?: number;
    /**
     * 租户管理员上限
     */
    adminAmount?: number;
};
