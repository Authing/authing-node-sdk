/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeleteTenantUsersDto = {
    /**
     * Tenant ID
     */
    tenantId: string;
    /**
     * User ID at the associated user pool level
     */
    linkUserIds: Array<string>;
    /**
     * Tenant member ID
     */
    memberIds: Array<string>;
};
