/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取应用列表，可以指定 租户 ID 筛选。
 */
export type ListTenantApplicationsDto = {
    /**
     * 获取应用列表的页码
     */
    page?: any;
    /**
     * 每页获取的应用数量
     */
    limit?: any;
    /**
     * 搜索关键字
     */
    keywords?: any;
    /**
     * 应用是否加入单点登录
     */
    ssoEnabled?: any;
};
