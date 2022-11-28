/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取数据资源列表,可通过数据资源名称、数据资源 Code 和数据资源所属权限空间 Code 列表进行指定筛选。
 */
export type ListDataResourcesDto = {
    /**
     * 当前页数，从 1 开始
     */
    page?: any;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: any;
    /**
     * 关键字搜索，可以是数据资源名称或者数据资源 Code
     */
    query?: any;
    /**
     * 权限数据所属权限空间 Code 列表
     */
    namespaceCodes?: any;
};
