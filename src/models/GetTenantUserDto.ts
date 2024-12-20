/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get tenant member information based on user ID or tenant member ID
 */
export type GetTenantUserDto = {
    /**
     * Tenant ID
     */
    tenantId?: any;
    /**
     * User ID at the associated user pool level
     */
    linkUserId?: any;
    /**
     * Tenant member ID
     */
    memberId?: any;
};
