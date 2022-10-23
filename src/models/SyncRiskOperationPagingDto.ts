/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SyncRiskOperationDto } from './SyncRiskOperationDto';

export type SyncRiskOperationPagingDto = {
    /**
     * 记录总数
     */
    totalCount: number;
    /**
     * 数据列表
     */
    list: Array<SyncRiskOperationDto>;
};
