/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OidcDiscoveryMetadata = {
    /**
     * OIDC Issuer
     */
    issuer: string;
    /**
     * OIDC 发起认证端点
     */
    authorization_endpoint: string;
    /**
     * OIDC 获取 Token 端点
     */
    token_endpoint: string;
    /**
     * OIDC 获取用户信息端点
     */
    userinfo_endpoint: string;
    /**
     * OIDC JWKS 端点
     */
    jwks_uri: string;
    /**
     * 此 OIDC IDP 支持的所有 Scope 列表
     */
    scopes_supported: Array<string>;
    /**
     * 此 OIDC IDP 支持的所有返回类型
     */
    response_types_supported: Array<'none' | 'code' | 'token' | 'id_token token' | 'id_token' | 'code token' | 'code id_token token' | 'code id_token'>;
    /**
     * 此 OIDC IDP 支持的所有 Response Mode
     */
    response_modes_supported: Array<string>;
    /**
     * 此 OIDC IDP 支持的所有 Grant Types
     */
    grant_types_supported: Array<string>;
    /**
     * 此 OIDC IDP 支持的所有 ID Token 签名方式
     */
    id_token_signing_alg_values_supported: Array<string>;
    /**
     * 此 OIDC IDP 支持的所有 ID Token 加密方式
     */
    id_token_encryption_alg_values_supported: Array<string>;
    id_token_encryption_enc_values_supported: Array<string>;
    /**
     * 此 OIDC IDP 支持的所有用户信息签名方式
     */
    userinfo_signing_alg_values_supported: Array<string>;
    /**
     * 此 OIDC IDP 支持的所有用户信息加密方式
     */
    userinfo_encryption_alg_values_supported: Array<string>;
    userinfo_encryption_enc_values_supported: Array<string>;
    /**
     * 此 OIDC IDP 支持的所有获取 Token 的认证方式
     */
    token_endpoint_auth_methods_supported: Array<string>;
    /**
     * 此 OIDC IDP 支持的所有 Claim Type
     */
    claim_types_supported: Array<string>;
    /**
     * 此 OIDC IDP 支持的所有 Claim
     */
    claims_supported: Array<string>;
    /**
     * 此 OIDC IDP 支持的所有 Code Challenge 模式
     */
    code_challenge_methods_supported: Array<string>;
    /**
     * 此 OIDC IDP 的前端登出端点
     */
    end_session_endpoint: string;
    /**
     * 此 OIDC IDP 的检查 Token 状态端点
     */
    introspection_endpoint: string;
    /**
     * 此 OIDC IDP 检查 Token 状态端点支持的所有验证方式
     */
    introspection_endpoint_auth_methods_supported: Array<string>;
    /**
     * 此 OIDC IDP 的撤销 Token 端点
     */
    revocation_endpoint: string;
    /**
     * 此 OIDC IDP 撤销 Token 端点支持的所有验证方式
     */
    revocation_endpoint_auth_methods_supported: Array<string>;
};
