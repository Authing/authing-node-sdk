/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MultipleTenantAdminDto } from './MultipleTenantAdminDto';

export type MultipleTenantAdminListPagingDto = {
    /**
     * 记录总数
     */
    totalCount: number;
    /**
     * 响应数据
     */
    list: Array<MultipleTenantAdminDto>;
};
