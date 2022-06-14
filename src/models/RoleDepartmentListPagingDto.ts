/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RoleDepartmentRespDto } from './RoleDepartmentRespDto';

export type RoleDepartmentListPagingDto = {
    /**
     * 记录总数
     */
    totalCount: number;
    /**
     * 数据
     */
    list: Array<RoleDepartmentRespDto>;
};
