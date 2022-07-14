/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 通过 身份源 ID，获取身份源详情，可以指定 租户 ID 筛选。
 */
export type GetExtIdpDto = {
    /**
     * 身份源 ID
     */
    id?: any;
    /**
     * 租户 ID
     */
    tenantId?: any;
};
