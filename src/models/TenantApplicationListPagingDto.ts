/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TenantApplicationDto } from './TenantApplicationDto';

export type TenantApplicationListPagingDto = {
    /**
     * 记录总数
     */
    totalCount: number;
    /**
     * 响应数据
     */
    list: Array<TenantApplicationDto>;
};
