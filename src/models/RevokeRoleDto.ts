/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TargetDto } from './TargetDto';

export type RevokeRoleDto = {
    /**
     * 部门信息
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
