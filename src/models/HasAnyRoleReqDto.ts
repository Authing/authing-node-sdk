/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HasAnyRoleOptionsDto } from './HasAnyRoleOptionsDto';
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
    /**
     * 可选参数
     */
    options?: HasAnyRoleOptionsDto;
};
