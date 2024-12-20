/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type KickPublicAccountsOptionsDto = {
    /**
     * User ID type, the default value is `user_id`, optional values are:
     * - `user_id`: Authing user ID, such as `6319a1504f3xxxxf214dd5b7`
     * - `phone`: user’s mobile phone number
     * - `email`: user email
     * - `username`: username
     * - `external_id`: The user's ID in the external system, corresponding to the `externalId` field of Authing user information
     *
     */
    userIdType?: KickPublicAccountsOptionsDto.userIdType;
};

export namespace KickPublicAccountsOptionsDto {

    /**
     * User ID type, the default value is `user_id`, optional values are:
     * - `user_id`: Authing user ID, such as `6319a1504f3xxxxf214dd5b7`
     * - `phone`: user’s mobile phone number
     * - `email`: user email
     * - `username`: username
     * - `external_id`: The user's ID in the external system, corresponding to the `externalId` field of Authing user information
     *
     */
    export enum userIdType {
        USER_ID = 'user_id',
        EXTERNAL_ID = 'external_id',
        PHONE = 'phone',
        EMAIL = 'email',
        USERNAME = 'username',
        IDENTITY = 'identity',
        SYNC_RELATION = 'sync_relation',
        CUSTOM_FIELD = 'custom_field',
    }


}
