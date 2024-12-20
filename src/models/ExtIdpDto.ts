/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ExtIdpDto = {
    /**
     * Identity source id
     */
    id: string;
    /**
     * Identity source name
     */
    name: string;
    /**
     * Logo of identity source
     */
    logo: string;
    /**
     * Tenant ID
     */
    tenantId?: string;
    /**
     * Identity source type
     */
    type: string;
};
