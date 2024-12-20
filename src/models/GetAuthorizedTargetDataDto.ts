/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResourcePermissionAssignmentDto } from './ResourcePermissionAssignmentDto';

export type GetAuthorizedTargetDataDto = {
    /**
     * Total
     */
    totalCount: number;
    /**
     * Data list
     */
    list: Array<ResourcePermissionAssignmentDto>;
};
