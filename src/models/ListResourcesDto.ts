/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 根据筛选条件，分页获取资源详情列表。
 */
export type ListResourcesDto = {
    /**
     * 所属权限分组(权限空间)的 Code，不传获取默认权限分组。
     */
    namespace?: any;
    /**
     * 资源类型
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
