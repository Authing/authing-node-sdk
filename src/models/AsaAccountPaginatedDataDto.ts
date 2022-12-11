/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AsaAccountDto } from './AsaAccountDto';

export type AsaAccountPaginatedDataDto = {
    /**
     * 列表数据
     */
    list: Array<AsaAccountDto>;
    /**
     * 记录总数
     */
    totalCount: number;
};
