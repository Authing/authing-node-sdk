/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SendTenantSmsDto = {
    /**
     * 管理员名字
     */
    adminName: string;
    /**
     * 用户名
     */
    userName: string;
    /**
     * 用户唯一标识
     */
    identifier: string;
    /**
     * 管理员手机
     */
    phone: string;
    /**
     * 管理员手机地区号
     */
    phoneCountryCode: string;
    /**
     * 租户 id
     */
    tenantId: string;
    /**
     * 租户名
     */
    tenantName: string;
};
