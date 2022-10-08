/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SyncJobDto } from './SyncJobDto';

export type SyncJobPagingDto = {
    /**
     * 记录总数
     */
    totalCount: number;
    /**
     * 数据列表
     */
    list: Array<SyncJobDto>;
};
