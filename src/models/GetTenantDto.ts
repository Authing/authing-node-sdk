/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 根据租户 ID 获取租户详情
 */
export type GetTenantDto = {
    /**
     * 租户 ID
     */
    tenantId?: any;
    /**
     * 是否增加返回租户成员统计
     */
    withMembersCount?: any;
    /**
     * 增加返回租户关联应用简单信息
     */
    withAppDetail?: any;
    /**
     * 增加返回租户下创建者简单信息
     */
    withCreatorDetail?: any;
    /**
     * 增加返回租户来源应用简单信息
     */
    withSourceAppDetail?: any;
};
