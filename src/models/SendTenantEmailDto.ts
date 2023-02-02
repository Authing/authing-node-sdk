/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SendTenantEmailDto = {
    /**
     * 管理员名字
     */
    adminName: string;
    /**
     * 用户名
     */
    userName: string;
    /**
     * 管理员邮箱
     */
    email: string;
    /**
     * 租户域名
     */
    identifier: string;
    /**
     * 租户 id
     */
    tenantId: string;
    /**
     * 租户名
     */
    tenantName: string;
};
