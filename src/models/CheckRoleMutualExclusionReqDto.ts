/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RoleCodeDto } from './RoleCodeDto';

export type CheckRoleMutualExclusionReqDto = {
    /**
     * 角色信息列表
     */
    roles: Array<RoleCodeDto>;
};
