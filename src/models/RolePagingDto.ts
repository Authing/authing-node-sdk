/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RoleDto } from './RoleDto';

export type RolePagingDto = {
    /**
     * 记录总数
     */
    totalCount: number;
    /**
     * 响应数据
     */
    list: Array<RoleDto>;
};
