/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 根据筛选条件，分页获取常规资源详情列表。
 */
export type ListCommonResourceDto = {
    /**
     * 当前页数，从 1 开始
     */
    page?: any;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: any;
    /**
     * 查询条件
     */
    keyword?: any;
    /**
     * 权限空间列表
     */
    namespaceCodeList?: any;
};
