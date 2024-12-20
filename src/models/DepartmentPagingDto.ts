/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DepartmentDto } from './DepartmentDto';

export type DepartmentPagingDto = {
    /**
     * Total count
     */
    totalCount: boolean;
    /**
     * Data
     */
    list: Array<DepartmentDto>;
};
