/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UpdateTenantDto } from './UpdateTenantDto';

export type TenantListPagingDto = {
    /**
     * 记录总数
     */
    totalCount: number;
    /**
     * 响应数据
     */
    list: Array<UpdateTenantDto>;
};
