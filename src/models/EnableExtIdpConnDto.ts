/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EnableExtIdpConnDto = {
    /**
     * Application ID
     */
    appIds: string;
    /**
     * Application ID
     */
    appId: string;
    /**
     * Whether to enable identity source connection
     */
    enabled: boolean;
    /**
     * Identity source connection ID
     */
    id: string;
    /**
     * Tenant ID
     */
    tenantId?: string;
};
