/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get the ASA account list under a certain application in pages
 */
export type ListAsaAccountsDto = {
    /**
     * The application ID to which it belongs
     */
    appId?: any;
    /**
     * Current page number, starting from 1
     */
    page?: any;
    /**
     * The number of pages per page, the maximum cannot exceed 50, the default is 10
     */
    limit?: any;
};
