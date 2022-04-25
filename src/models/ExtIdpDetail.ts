/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ExtIdpDetail = {
    /**
     * 身份源 id
     */
    id: string;
    /**
     * 身份源名称
     */
    name: string;
    /**
     * 租户场景下自动加入
     */
    autoJoin: boolean;
    /**
     * 租户 ID
     */
    tenantId?: string;
    /**
     * 身份源类型
     */
    type: string;
    /**
     * 连接信息
     */
    connections: any;
};
