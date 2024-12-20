/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AuthenticatorAssertionResponseDto = {
    /**
     * Authenticator information, including authentication status, signature count, etc.
     */
    authenticatorData: string;
    /**
     * Client data, including origin (i.e., the source of the certificate request), challenge code and other information
     */
    clientDataJSON: string;
    /**
     * Authenticator signature
     */
    signature: string;
    /**
     * The user ID when creating the credential
     */
    userHandle: string;
};
