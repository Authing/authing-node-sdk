/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExtIdpDto } from './ExtIdpDto';

export type ExtIdpListPagingDto = {
    /**
     *Total number of records
     */
    totalCount: number;
    /**
     *Response data
     */
    list: Array<ExtIdpDto>;
};
