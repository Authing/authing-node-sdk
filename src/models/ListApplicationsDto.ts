/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get application list
 */
export type ListApplicationsDto = {
    /**
     * Current page number, starting from 1
     */
    page?: any;
    /**
     * The number of pages per page, the maximum cannot exceed 50, the default is 10
     */
    limit?: any;
    /**
     * Whether it is an integrated application
     */
    isIntegrateApp?: any;
    /**
     * Whether it is a self-built application
     */
    isSelfBuiltApp?: any;
    /**
     * Whether to enable single sign-on
     */
    ssoEnabled?: any;
    /**
     * Fuzzy search string
     */
    keywords?: any;
    /**
     * Search applications, true: search all applications, default is false
     */
    all?: any;
};
