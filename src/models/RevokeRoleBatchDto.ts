/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RoleCodeDto } from './RoleCodeDto';
import type { TargetDto } from './TargetDto';

export type RevokeRoleBatchDto = {
    /**
     * 角色信息
     */
    roles: Array<RoleCodeDto>;
    /**
     * 目标信息
     */
    targets: Array<TargetDto>;
};
