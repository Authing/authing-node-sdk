/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PublicKeyCredentialRequestOptionsDto } from './PublicKeyCredentialRequestOptionsDto';

export type AuthenticationOptionsDto = {
    /**
     * Authenticator authentication parameters
     */
    authenticationOptions: PublicKeyCredentialRequestOptionsDto;
    /**
     * The ticket needs to be returned and used to initiate verification to the server of the authentication result obtained from the authenticator.
     */
    ticket: string;
};
