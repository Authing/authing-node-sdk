/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AddTenantUsersDto = {
    /**
     * 关联的用户池级别的用户 ID
     */
    linkUserIds: Array<string>;
    /**
     * 租户 ID
     */
    tenantId: string;
};
