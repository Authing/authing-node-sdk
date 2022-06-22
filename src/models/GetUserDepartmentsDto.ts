/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取用户部门列表
 */
export type GetUserDepartmentsDto = {
    /**
     * 用户 ID
     */
    userId?: any;
    /**
     * 当前页数，从 1 开始
     */
    page?: any;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: any;
    /**
     * 是否获取自定义数据
     */
    withCustomData?: any;
    /**
     * 排序依据
     */
    sortBy?: any;
    /**
     * 增序还是倒序
     */
    orderBy?: any;
};
