/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ExtIdpDetail = {
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
    /**
     * Connection list of identity sources
     */
    connections: any;
    /**
     * Automatically join in tenant scenario
     */
    autoJoin: boolean;
};
