/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Obtain the identity source details through the identity source ID, and you can specify the tenant ID to filter.
 */
export type GetExtIdpDto = {
    /**
     * Identity source ID
     */
    id?: any;
    /**
     * Tenant ID
     */
    tenantId?: any;
    /**
     * Application ID
     */
    appId?: any;
    /**
     * Identity source type
     */
    type?: any;
};
