/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthenticatorAssertionResponseDto } from './AuthenticatorAssertionResponseDto';

export type AuthenticationCredentialDto = {
    /**
     * Base64URL encoded credential ID
     */
    id: string;
    /**
     *Original voucher ID
     */
    rawId: string;
    /**
     * Fixed value, 'public-key'
     */
    response: AuthenticatorAssertionResponseDto;
    /**
     * Fixed value, 'public-key'
     */
    type: string;
};
