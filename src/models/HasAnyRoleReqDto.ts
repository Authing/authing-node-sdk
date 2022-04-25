/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HasRoleRolesDto } from './HasRoleRolesDto';

export type HasAnyRoleReqDto = {
    /**
     * 角色列表
     */
    roles: Array<HasRoleRolesDto>;
    /**
     * 用户 ID
     */
    userId: string;
};
