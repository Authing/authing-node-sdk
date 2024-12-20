/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Obtain the archived user list, support paging, and can filter the start time, etc.
 */
export type ListArchivedUsersDto = {
    /**
     * Current page number, starting from 1
     */
    page?: any;
    /**
     * The number of pages per page, the maximum cannot exceed 50, the default is 10
     */
    limit?: any;
    /**
     * Start time, which is a UNIX timestamp accurate to seconds, not specified by default
     */
    startAt?: any;
};
