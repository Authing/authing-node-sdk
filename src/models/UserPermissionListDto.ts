/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserPermissionResourceDto } from './UserPermissionResourceDto';
import type { UserPermissionResourceOtherDto } from './UserPermissionResourceOtherDto';

export type UserPermissionListDto = {
    /**
     * 数据策略授权的用户 ID
     */
    userId: string;
    /**
     * 数据策略授权的权限空间 Code
     */
    namespaceCode: string;
    /**
     * 用户在权限空间下所有的数据策略资源列表
     */
    resourceList: (UserPermissionResourceDto | UserPermissionResourceOtherDto);
};
