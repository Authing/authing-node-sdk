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
     * 主体过期时间毫秒值, 为 null 时永久有效
     */
    endTime?: number;
    /**
     * 主体加入时间毫秒值, 为 null 时立即加入
     */
    enableTime?: number;
    /**
     * 所属权限分组的 code
     */
    namespace?: string;
};
