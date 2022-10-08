/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LoginHistoryDto } from './LoginHistoryDto';

export type LoginHistoryPaginatedRespDto = {
    /**
     * 记录总数
     */
    totalCount: number;
    /**
     * 记录列表
     */
    list: Array<LoginHistoryDto>;
};
