/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResourcePermissionAssignmentDto } from './ResourcePermissionAssignmentDto';

export type GetAuthorizedTargetDataDto = {
    /**
     * 总数
     */
    totalCount: number;
    /**
     * 元素列表
     */
    list: Array<ResourcePermissionAssignmentDto>;
};
