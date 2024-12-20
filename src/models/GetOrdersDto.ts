/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get the current user pool order list
 */
export type GetOrdersDto = {
    /**
     * Current page number, starting from 1
     */
    page?: any;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: any;
};
