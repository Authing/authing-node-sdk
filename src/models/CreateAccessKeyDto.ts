/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateAccessKeyDto = {
    /**
     * 密钥类型
     */
    type: string;
    /**
     * 密钥所属用户 ID
     */
    userId?: string;
    /**
     * 密钥所属租户 ID
     */
    tenantId?: string;
};
