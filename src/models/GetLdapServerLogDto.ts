/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * LDAP server log query
 */
export type GetLdapServerLogDto = {
    /**
     * Type: 1 access log, 2 error log
     */
    type?: any;
    /**
     * Current page, starting from 1
     */
    page?: any;
    /**
     *Number of items per page
     */
    limit?: any;
    /**
     * Connection ID
     */
    connection?: any;
    /**
     * opcode
     */
    operationNumber?: any;
    /**
     * Error code
     */
    errorCode?: any;
    /**
     * Message content
     */
    message?: any;
    /**
     * Start time - timestamp
     */
    startTime?: any;
    /**
     * End time - timestamp
     */
    endTime?: any;
};
