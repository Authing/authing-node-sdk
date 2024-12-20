/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * To obtain user details through user ID, you can choose to obtain custom data, identities, select a specified user ID type, etc.
 */
export type GetUserDto = {
    /**
     *User ID
     */
    userId?: any;
    /**
     * User ID type, the default value is `user_id`, the optional values are:
     * - `user_id`: Authing user ID, such as `6319a1504f3xxxxf214dd5b7`
     * - `phone`: user’s mobile phone number
     * - `email`: user email
     * - `username`: username
     * - `external_id`: the user's ID in the external system, corresponding to the `externalId` field of Authing user information
     * - `identity`: The user's external identity source information, in the format of `<extIdpId>:<userIdInIdp>`, where `<extIdpId>` is the ID of the Authing identity source, `<userIdInIdp>` is the user's external identity source ID.
     * Example value: `62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`.
     * - `sync_relation`: The user's external identity source information in the format of `<provier>:<userIdInIdp>`, where `<provier>` is the synchronization identity source type, such as wechatwork, lark; `<userIdInIdp>` is the user's The ID of the external identity source.
     * Example value: `lark:ou_8bae746eac07cd2564654140d2a9ac61`.
     *
     */
    userIdType?: any;
    /**
     * Whether to flatten the extended field
     */
    flatCustomData?: any;
    /**
     * Whether to obtain custom data
     */
    withCustomData?: any;
    /**
     * Whether to obtain department information
     */
    withPost?: any;
    /**
     * Whether to obtain identities
     */
    withIdentities?: any;
    /**
     * Whether to obtain the department ID list
     */
    withDepartmentIds?: any;
};
