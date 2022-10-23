/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 根据用户 ID 或租户成员 ID 获取租户成员信息
 */
export type GetTenantUserDto = {
    /**
     * 租户 ID
     */
    tenantId?: any;
    /**
     * 关联的用户池级别的用户 ID
     */
    linkUserId?: any;
    /**
     * 租户成员 ID
     */
    memberId?: any;
};
