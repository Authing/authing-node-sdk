/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthenticationCredentialDto } from './AuthenticationCredentialDto';
import type { SignInByWebAuthnOptionsDto } from './SignInByWebAuthnOptionsDto';

export type FinalizeWebAuthnLoginDto = {
    /**
     * Ticket obtained from Get WebAuthn authentication request initialization parameter interface
     */
    ticket: string;
    /**
     * Authenticator credential information
     */
    credential: AuthenticationCredentialDto;
    /**
     * Optional parameters
     */
    options?: SignInByWebAuthnOptionsDto;
};
