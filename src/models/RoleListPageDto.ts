/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RolePermissionListDto } from './RolePermissionListDto';

export type RoleListPageDto = {
    /**
     * 记录总数
     */
    totalCount?: number;
    /**
     * 响应数据
     */
    data: Array<RolePermissionListDto>;
};
