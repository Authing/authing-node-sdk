/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApplicationDto } from './ApplicationDto';

export type ApplicationPaginatedDataDto = {
    /**
     * 列表数据
     */
    list: Array<ApplicationDto>;
    /**
     * 记录总数
     */
    totalCount: number;
};
