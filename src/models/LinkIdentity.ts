/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LinkIdentity = {
    /**
     * Required. The user's unique identifier in this external identity source needs to be obtained from the authentication return value of the external identity source.
     */
    userIdInIdp: string;
    /**
     * Required, the Authing user ID for binding operations.
     */
    userId: string;
    /**
     * Required, identity source ID, used to specify which identity source the identity belongs to.
     */
    extIdpId: string;
    /**
     * Not required, indicating the specific type of the identity, which can be obtained from the type field of the user's identity information. If not passed, the default is generic
     */
    type?: string;
    /**
     * Deprecated, can be passed in arbitrarily, this field will be removed in the future.
     */
    isSocial?: boolean;
};
