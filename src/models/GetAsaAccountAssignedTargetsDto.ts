/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get the list of principals assigned to the account by paging according to the ASA account ID
 */
export type GetAsaAccountAssignedTargetsDto = {
    /**
     * The application ID to which it belongs
     */
    appId?: any;
    /**
     * ASA account ID
     */
    accountId?: any;
    /**
     * Current page number, starting from 1
     */
    page?: any;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: any;
};
