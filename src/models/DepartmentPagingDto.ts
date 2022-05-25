/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DepartmentDto } from './DepartmentDto';

export type DepartmentPagingDto = {
    /**
     * 总数
     */
    totalCount: boolean;
    /**
     * 响应数据
     */
    list: Array<DepartmentDto>;
};
