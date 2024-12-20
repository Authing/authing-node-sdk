/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * If the users in Authing are synchronized upstream and downstream, this interface can be used to query the associated user information in the third party
 */
export type GetUserSyncRelationsDto = {
    /**
     * The user's unique identifier can be user ID, username, email, mobile phone number, externalId, or ID in an external identity source. For details, see the description of the userIdType field. Defaults to user id.
     */
    userId?: any;
    /**
     * User ID type, the default value is `user_id`, optional values are:
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
};
