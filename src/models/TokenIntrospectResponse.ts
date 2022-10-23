/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TokenIntrospectResponse = {
    /**
     * Token 是否有效
     */
    active: boolean;
    /**
     * 此 Token 对应的用户 ID，当 token 合法时返回。
     */
    sub?: string;
    /**
     * 签发此 Token 的应用 ID，当 token 合法时返回。
     */
    client_id?: string;
    /**
     * Token 的到期时间，为单位为秒的时间戳。当 token 合法时返回。
     */
    exp?: number;
    /**
     * Token 的签发时间，为单位为秒的时间戳。当 token 合法时返回。
     */
    iat?: number;
    /**
     * Issuer，当 token 合法时返回。
     */
    iss?: string;
    /**
     * JTI，当 token 合法时返回。
     */
    jti?: string;
    /**
     * 使用逗号分割的 scope 数组，当 token 合法时返回。
     */
    scope?: string;
    /**
     * Token Type，默认为 Bearer，当 token 合法时返回。
     */
    token_type?: string;
};
