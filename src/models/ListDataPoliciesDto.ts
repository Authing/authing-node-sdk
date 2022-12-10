/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 分页查询数据策略列表，也可通过关键字搜索数据策略名称或者数据策略 Code 进行模糊查找。
 */
export type ListDataPoliciesDto = {
    /**
     * 当前页数，从 1 开始
     */
    page?: any;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: any;
    /**
     * 数据策略名称关键字搜索
     */
    query?: any;
};
