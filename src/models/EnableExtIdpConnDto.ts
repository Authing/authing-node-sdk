/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EnableExtIdpConnDto = {
    /**
     * 租户 ID
     */
    tenantId: string;
    /**
     * 应用 ID
     */
    appId: string;
    /**
     * 是否开启身份源连接
     */
    enabled: boolean;
    /**
     * 连接 ID
     */
    id: string;
};
