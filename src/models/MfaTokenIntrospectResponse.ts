/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MfaTokenIntrospectResponse = {
    /**
     * Token 是否有效
     */
    active: boolean;
    /**
     * 签发此 Token 的用户池 ID，当 token 合法时返回。
     */
    userPoolId?: string;
    /**
     * 签发此 Token 的用户 ID，当 token 合法时返回。
     */
    userId?: string;
    /**
     * Token 的到期时间，为单位为秒的时间戳。当 token 合法时返回。
     */
    exp?: number;
    /**
     * Token 的签发时间，为单位为秒的时间戳。当 token 合法时返回。
     */
    iat?: number;
};
