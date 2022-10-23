/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeleteTenantUsersDto = {
    /**
     * 租户 ID
     */
    tenantId: string;
    /**
     * 关联的用户池级别的用户 ID
     */
    linkUserIds: Array<string>;
    /**
     * 租户成员 ID
     */
    memberIds: Array<string>;
};
