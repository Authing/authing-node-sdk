/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthenticatorAssertionResponseDto } from './AuthenticatorAssertionResponseDto';

export type AuthenticationCredentialDto = {
    /**
     * Base64URL 编码的凭证 ID
     */
    id: string;
    /**
     * 原始凭证 ID
     */
    rawId: string;
    /**
     * 固定值，'public-key'
     */
    response: AuthenticatorAssertionResponseDto;
    /**
     * 固定值，'public-key'
     */
    type: string;
};
