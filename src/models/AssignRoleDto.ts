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
     * 分组 code，识别码
     */
    code: string;
    /**
     * 权限分组
     */
    namespace?: string;
};
