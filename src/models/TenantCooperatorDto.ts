/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TenantUserDto } from './TenantUserDto';
import type { UserDto } from './UserDto';

export type TenantCooperatorDto = {
    /**
     * 用户唯一 ID
     */
    userId: string;
    /**
     * 类型
     */
    type: string;
    /**
     * 是否external
     */
    external: boolean;
    /**
     * 用户
     */
    user: UserDto;
    /**
     * 租户用户
     */
    tenantUser?: TenantUserDto;
};
