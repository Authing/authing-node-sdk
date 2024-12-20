/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AuthenticatorAttestationResponseDto = {
    /**
     * CBOR encoded authenticator data, including certificate public key, certificate ID, signature, signature count and other information
     */
    attestationObject: string;
    /**
     * Client data, including origin (i.e., the source of the certificate request), challenge and other information
     */
    clientDataJSON: string;
};
