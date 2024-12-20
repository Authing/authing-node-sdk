/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Obtain public account details through the public account user ID. You can choose to obtain custom data, select a specified user ID type, etc.
 */
export type GetPublicAccountDto = {
    /**
     * Public account user ID
     */
    userId?: any;
    /**
     * User ID type, the default value is `user_id`, the optional values are:
     * - `user_id`: Authing user ID, such as `6319a1504f3xxxxf214dd5b7`
     * - `phone`: user’s mobile phone number
     * - `email`: user email
     * - `username`: username
     * - `external_id`: the user's ID in the external system, corresponding to the `externalId` field of Authing user information
     *
     */
    userIdType?: any;
    /**
     * Whether to obtain custom data
     */
    withCustomData?: any;
    /**
     * Whether to obtain the department ID list
     */
    withDepartmentIds?: any;
};
