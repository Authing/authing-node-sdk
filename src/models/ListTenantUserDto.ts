/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ListTenantUsersOptionsDto } from './ListTenantUsersOptionsDto';

export type ListTenantUserDto = {
    /**
     * 租户 ID
     */
    tenantId: string;
    /**
     * 搜索关键字
     */
    keywords?: string;
    /**
     * 可选项
     */
    options?: ListTenantUsersOptionsDto;
};
