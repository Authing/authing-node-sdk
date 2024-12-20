/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * To obtain user information at this endpoint, users need to bring the user's `access_token` in the request header, and the Authing server will return the corresponding fields based on the `scope` in the user's `access_token`.
 */
export type GetProfileDto = {
    /**
     * Whether to obtain custom data
     */
    withCustomData?: any;
    /**
     * Whether to obtain identities
     */
    withIdentities?: any;
    /**
     * Whether to obtain the department ID list
     */
    withDepartmentIds?: any;
};
