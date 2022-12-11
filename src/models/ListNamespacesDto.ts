/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 根据筛选条件，分页获取权限分组列表。
 */
export type ListNamespacesDto = {
    /**
     * 当前页数，从 1 开始
     */
    page?: any;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: any;
    /**
     * 搜索权限分组 Code
     */
    keywords?: any;
};
