/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RoleCodeDto } from './RoleCodeDto';
import type { TargetDto } from './TargetDto';

export type AssignRoleBatchDto = {
    /**
     * 角色信息
     */
    roles: Array<RoleCodeDto>;
    /**
     * 部门信息
     */
    targets: Array<TargetDto>;
};
