/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TenantCooperatorDto } from './TenantCooperatorDto';

export type TenantCooperatorListPagingDto = {
    /**
     * 记录总数
     */
    totalCount: number;
    /**
     * 响应数据
     */
    list: Array<TenantCooperatorDto>;
};
