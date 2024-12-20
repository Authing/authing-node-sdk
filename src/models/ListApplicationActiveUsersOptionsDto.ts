/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaginationDto } from './PaginationDto';

export type ListApplicationActiveUsersOptionsDto = {
    /**
     *Paging configuration
     */
    pagination?: PaginationDto;
    /**
     * Whether to obtain custom data
     */
    withCustomData?: boolean;
    /**
     * Whether to obtain identities
     */
    withIdentities?: boolean;
    /**
     * Whether to obtain the department ID list
     */
    withDepartmentIds?: boolean;
};
