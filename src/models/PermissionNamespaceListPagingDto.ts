/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PermissionNamespacesListRespDto } from './PermissionNamespacesListRespDto';

export type PermissionNamespaceListPagingDto = {
    /**
     * 记录总数
     */
    totalCount: number;
    /**
     * 响应数据
     */
    list: Array<PermissionNamespacesListRespDto>;
};
