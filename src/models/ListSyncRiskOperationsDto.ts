/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取同步风险操作列表
 */
export type ListSyncRiskOperationsDto = {
    /**
     * 同步任务 ID
     */
    syncTaskId?: any;
    /**
     * 当前页数，从 1 开始
     */
    page?: any;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: any;
    /**
     * 根据执行状态筛选
     */
    status?: any;
    /**
     * 根据操作对象类型，默认获取所有类型的记录：
     * - `department`: 部门
     * - `user`: 用户
     *
     */
    objectType?: any;
};
