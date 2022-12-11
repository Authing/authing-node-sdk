/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PermissionNamespaceRolesListRespDto } from './PermissionNamespaceRolesListRespDto';

export type PermissionNamespaceRolesListPagingDto = {
    /**
     * 记录总数
     */
    totalCount: number;
    /**
     * 响应数据
     */
    list: Array<PermissionNamespaceRolesListRespDto>;
};
