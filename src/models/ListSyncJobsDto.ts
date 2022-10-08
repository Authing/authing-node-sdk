/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取同步作业详情
 */
export type ListSyncJobsDto = {
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
     * 同步任务触发类型：
     * - `manually`: 手动触发执行
     * - `timed`: 定时触发
     * - `automatic`: 根据事件自动触发
     *
     */
    syncTrigger?: any;
};
