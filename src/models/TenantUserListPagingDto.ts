/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TenantUserDto } from './TenantUserDto';

export type TenantUserListPagingDto = {
    /**
     * 记录总数
     */
    totalCount: number;
    /**
     * 响应数据
     */
    list: Array<TenantUserDto>;
};
