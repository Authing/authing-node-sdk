/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RoleCodeDto } from './RoleCodeDto';
import type { TargetDto } from './TargetDto';

export type RevokeRoleBatchDto = {
    /**
     * 移除角色的目标列表
     */
    targets: Array<TargetDto>;
    /**
     * 角色信息列表
     */
    roles: Array<RoleCodeDto>;
};
