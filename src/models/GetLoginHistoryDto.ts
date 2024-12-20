/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get login log
 */
export type GetLoginHistoryDto = {
    /**
     * Application ID, you can filter based on application ID. By default, it is not possible to obtain the login history of all applications.
     */
    appId?: any;
    /**
     * Client IP, you can filter based on the client IP when logging in. By default, the login history of all login IPs is not uploaded.
     */
    clientIp?: any;
    /**
     *Whether the login is successful or not can be filtered based on whether the login is successful or not. By default, the acquired records include both successful and failed login history.
     */
    success?: any;
    /**
     * Start time, as a timestamp in milliseconds
     */
    start?: any;
    /**
     * End time, as a timestamp in milliseconds
     */
    end?: any;
    /**
     * Current page number, starting from 1
     */
    page?: any;
    /**
     * The number of pages per page, the maximum cannot exceed 50, the default is 10
     */
    limit?: any;
};
