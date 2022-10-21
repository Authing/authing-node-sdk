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
     * 当前页数，从 1 开始
     */
    page?: any;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: any;
};
