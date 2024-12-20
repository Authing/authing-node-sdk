/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get the ip list by pagination
 */
export type IpListDto = {
    /**
     * IP type
     */
    ipType?: any;
    /**
     * Current page number, starting from 1
     */
    page?: any;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: any;
};
