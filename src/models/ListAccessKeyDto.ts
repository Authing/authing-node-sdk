/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 根据协作管理员 Id 获取协作管理员下所有的 AK/SK 列表
 */
export type ListAccessKeyDto = {
    /**
     * 密钥所属用户 ID
     */
    userId?: any;
    /**
     * 密钥所属租户 ID
     */
    tenantId?: any;
    /**
     * 密钥类型
     */
    type?: any;
    /**
     * AccessKey 状态，activated：已激活，staging：分级（可轮换），revoked：已撤销
     */
    status?: any;
};
