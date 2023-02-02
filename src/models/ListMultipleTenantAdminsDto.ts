/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 根据用户池 ID 获取某个用户池内拥有多租户管理权限的用户列表
 */
export type ListMultipleTenantAdminsDto = {
    /**
     * 搜索关键字
     */
    keywords?: any;
    /**
     * 页码
     */
    page?: any;
    /**
     * 每页获取的数据量
     */
    limit?: any;
};
