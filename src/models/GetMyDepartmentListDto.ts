/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 此接口用于获取用户的部门列表，可根据一定排序规则进行排序。
 */
export type GetMyDepartmentListDto = {
    /**
     * 当前页数，从 1 开始
     */
    page?: any;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: any;
    /**
     * 是否获取部门的自定义数据
     */
    withCustomData?: any;
    /**
     * 排序依据，如 部门创建时间、加入部门时间、部门名称、部门标志符
     */
    sortBy?: any;
    /**
     * 增序或降序
     */
    orderBy?: any;
};
