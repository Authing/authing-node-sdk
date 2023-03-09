/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AuthenticatorAssertionResponseDto = {
    /**
     * 认证器信息，包含认证状态、签名计数等
     */
    authenticatorData: string;
    /**
     * 客户端数据，包含 origin（即凭证请求来源）、挑战码等信息
     */
    clientDataJSON: string;
    /**
     * 认证器签名
     */
    signature: string;
    /**
     * 创建凭证时的用户 ID
     */
    userHandle: string;
};
