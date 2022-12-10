/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 分页获取数据策略简略信息列表，通过关键字搜索数据策略名称或者数据策略 Code 进行模糊查找出数据策略 ID、数据策略名称和数据策略描述信息。
 */
export type ListSimpleDataPoliciesDto = {
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
