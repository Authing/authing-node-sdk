/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RoleCodeDto } from './RoleCodeDto';

export type CheckRoleMutualExclusionReqDto = {
    /**
     * Role information list
     */
    roles: Array<RoleCodeDto>;
};
