/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthorizedResourceDto } from './AuthorizedResourceDto';

export type AuthorizedResourcePagingDto = {
    /**
     *Total number of records
     */
    totalCount: number;
    /**
     *Response data
     */
    list: Array<AuthorizedResourceDto>;
};
