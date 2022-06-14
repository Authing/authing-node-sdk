/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取分组列表接口，支持分页
 */
export type ListGroupsDto = {
    /**
     * 当前页数，从 1 开始
     */
    page?: any;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: any;
};
