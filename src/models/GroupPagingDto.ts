/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResGroupDto } from './ResGroupDto';

export type GroupPagingDto = {
    /**
     * 记录总数
     */
    totalCount: number;
    /**
     * 响应数据
     */
    list: Array<ResGroupDto>;
};
