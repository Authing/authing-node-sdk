/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ChangeExtIdpConnStateDto = {
    /**
     * 身份源连接 ID
     */
    id: string;
    /**
     * 是否开启身份源连接
     */
    enabled: boolean;
    /**
     * 应用 ID
     */
    appId: string;
    /**
     * 租户 ID
     */
    tenantId?: string;
    /**
     * 应用 ID 列表
     */
    appIds?: Array<string>;
};
