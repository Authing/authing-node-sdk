/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 根据筛选条件，分页获取资源详情列表。
 */
export type ListResourcesDto = {
    /**
     * 所属权限分组的 code
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
