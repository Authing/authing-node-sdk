/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ExtIdpDto = {
    /**
     * 身份源 id
     */
    id: string;
    /**
     * 身份源名称
     */
    name: string;
    /**
     * 租户 ID
     */
    tenantId?: string;
    /**
     * 身份源类型
     */
    type: string;
};
