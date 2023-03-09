/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EventAppDto } from './EventAppDto';

export type EventAppPagingDto = {
    /**
     * 记录总数
     */
    totalCount: number;
    /**
     * 数据列表
     */
    list: Array<EventAppDto>;
};
