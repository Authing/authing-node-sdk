/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WechatIdentityResolveRespDataDto = {
    /**
     * 可选的账号绑定方式。
     */
    methods?: Array<string>;
    /**
     * 可选的账号列表。
     */
    accounts?: Array<string>;
    /**
     * 认证中间态。
     */
    key: string;
};
