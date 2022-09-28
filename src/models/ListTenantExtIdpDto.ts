/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 在租户控制台内获取身份源列表，可以根据 应用 ID 筛选。
 */
export type ListTenantExtIdpDto = {
    /**
     * 租户 ID
     */
    tenantId?: any;
    /**
     * 应用 ID
     */
    appId?: any;
    /**
     * 身份源类型
     */
    type?: any;
    /**
     * 页码
     */
    page?: any;
    /**
     * 每页获取的数据量
     */
    limit?: any;
};
