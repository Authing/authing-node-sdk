/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserAttributionDto } from './UserAttributionDto';

export type UserAttributionPaginationDto = {
    /**
     * 记录总数
     */
    totalCount?: number;
    /**
     * 列表数据
     */
    list: Array<UserAttributionDto>;
};
