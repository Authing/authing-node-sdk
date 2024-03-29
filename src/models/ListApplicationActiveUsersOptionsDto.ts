/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaginationDto } from './PaginationDto';

export type ListApplicationActiveUsersOptionsDto = {
    /**
     * 分页配置
     */
    pagination?: PaginationDto;
    /**
     * 是否获取自定义数据
     */
    withCustomData?: boolean;
    /**
     * 是否获取 identities
     */
    withIdentities?: boolean;
    /**
     * 是否获取部门 ID 列表
     */
    withDepartmentIds?: boolean;
};
