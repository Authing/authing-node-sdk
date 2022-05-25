/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TargetDto } from './TargetDto';

export type AssignRoleDto = {
    /**
     * 目标对象
     */
    targets: Array<TargetDto>;
    /**
     * 权限分组内角色的唯一标识符
     */
    code: string;
    /**
     * 所属权限分组的 code
     */
    namespace?: string;
};
