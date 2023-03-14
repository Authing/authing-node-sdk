/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 岗位列表
 */
export type ListPostDto = {
    /**
     * 搜索岗位 code 或名称
     */
    keywords?: any;
    /**
     * 是否统计岗位关联的部门数和用户数
     */
    skipCount?: any;
    /**
     * 当前页数，从 1 开始
     */
    page?: any;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: any;
};
