/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RiskListItemDto } from './RiskListItemDto';

export type UserListPagingDto = {
    /**
     * 记录总数
     */
    totalCount: number;
    /**
     * 数据列表
     */
    list: Array<RiskListItemDto>;
};
