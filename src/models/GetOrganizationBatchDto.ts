/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Obtain organizational details in batches
 */
export type GetOrganizationBatchDto = {
    /**
     * Organization Code (organizationCode) list
     */
    organizationCodeList?: any;
    /**
     * Whether to obtain custom data
     */
    withCustomData?: any;
    /**
     * Whether to obtain department information
     */
    withPost?: any;
    /**
     * Tenant ID
     */
    tenantId?: any;
};
