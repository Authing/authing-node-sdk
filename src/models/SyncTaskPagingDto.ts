/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SyncTaskDto } from './SyncTaskDto';

export type SyncTaskPagingDto = {
    /**
     * 记录总数
     */
    totalCount: number;
    /**
     * 数据列表
     */
    list: Array<SyncTaskDto>;
};
