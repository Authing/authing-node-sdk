/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateTenantUserDto = {
    /**
     * 租户成员 ID
     */
    updates: any;
    /**
     * 租户 ID
     */
    tenantId: string;
    /**
     * 关联的用户池级别的用户 ID
     */
    linkUserId?: string;
    /**
     * 租户成员 ID
     */
    memberId?: string;
};
