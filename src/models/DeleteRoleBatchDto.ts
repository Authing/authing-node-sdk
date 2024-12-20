/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RoleCodeAndNamespaceDto } from './RoleCodeAndNamespaceDto';

export type DeleteRoleBatchDto = {
    /**
     * Role code and namespace list
     */
    roleList: Array<RoleCodeAndNamespaceDto>;
};
