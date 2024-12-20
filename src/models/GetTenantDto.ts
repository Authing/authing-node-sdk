/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get tenant details based on tenant ID
 */
export type GetTenantDto = {
    /**
     * Tenant ID
     */
    tenantId?: any;
    /**
     * Whether to add returned tenant member statistics
     */
    withMembersCount?: any;
    /**
     * Added the ability to return simple information about tenant associated applications
     */
    withAppDetail?: any;
    /**
     * Added the ability to return simple information about the creator under the tenant
     */
    withCreatorDetail?: any;
    /**
     * Added simple information returned to tenant source application
     */
    withSourceAppDetail?: any;
};
