/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RoleCodeAndNamespaceDto } from './RoleCodeAndNamespaceDto';

export type DeleteRoleBatchDto = {
    /**
     * 角色 Code 和 namespace 列表
     */
    roleList: Array<RoleCodeAndNamespaceDto>;
};
