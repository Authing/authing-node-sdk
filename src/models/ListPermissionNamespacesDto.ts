/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 分页获取权限空间列表。
 */
export type ListPermissionNamespacesDto = {
    /**
     * 当前页数，从 1 开始
     */
    page?: any;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: any;
    /**
     * 搜索权限空间Code
     */
    query?: any;
};
