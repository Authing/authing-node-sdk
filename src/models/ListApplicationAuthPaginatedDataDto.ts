/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ListApplicationAuthDataDto } from './ListApplicationAuthDataDto';

export type ListApplicationAuthPaginatedDataDto = {
    /**
     * 列表数据
     */
    list: Array<ListApplicationAuthDataDto>;
    /**
     * 记录总数
     */
    totalCount: number;
};
