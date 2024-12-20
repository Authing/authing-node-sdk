/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CheckSessionStatusDto = {
    /**
     * App ID
     */
    appId: string;
    /**
     * The user's unique identifier can be user ID, username, email, mobile phone number, externalId, or ID in an external identity source. For details, see the description of the userIdType field. Defaults to user id.
     */
    userId: string;
};
