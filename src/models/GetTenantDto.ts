/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

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
     * 增加返回租户下 app 简单信息
     */
    withAppDetail?: any;
};
