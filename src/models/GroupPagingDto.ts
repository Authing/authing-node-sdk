/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResGroupDto } from './ResGroupDto';

export type GroupPagingDto = {
    /**
     *Total number of records
     */
    totalCount: number;
    /**
     *Response data
     */
    list: Array<ResGroupDto>;
};
