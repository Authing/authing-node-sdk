/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type IdentityDto = {
    /**
     * Identity ID
     */
    identityId: string;
    /**
     * 外部身份源的 ID
     */
    extIdpId: string;
    /**
     * 外部身份源类型，如 lark, wechat
     */
    provider: string;
    /**
     * Identity 类型，如 unionid, openid, primary
     */
    type: string;
    /**
     * 在外部身份源的 id
     */
    userIdInIdp: string;
};
