/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EnableExtIdpConnDto = {
    /**
     * 应用 ID
     */
    appId: string;
    /**
     * 是否开启身份源连接
     */
    enabled: boolean;
    /**
     * 身份源连接 ID
     */
    id: string;
    /**
     * 租户 ID
     */
    tenantId?: string;
};
