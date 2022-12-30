/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TreePermissionDto } from './TreePermissionDto';

export type GetUserResourceStructDataDto = {
    /**
     * 权限空间code
     */
    namespaceCode: string;
    /**
     * 资源code
     */
    resourceCode: string;
    /**
     * 数据资源权限操作列表
     */
    permissionBo: TreePermissionDto;
};
