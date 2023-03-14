/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AuthenticatorAttestationResponseDto = {
    /**
     * CBOR 编码的认证器数据，包含凭证公钥、凭证 ID、签名、签名计数等信息
     */
    attestationObject: string;
    /**
     * 客户端数据，包含 origin（即凭证请求来源）、挑战等信息
     */
    clientDataJSON: string;
};
