/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ChangeExtIdpConnStateDto = {
    /**
     * Identity source connection ID
     */
    id: string;
    /**
     * Whether to enable identity source connection
     */
    enabled: boolean;
    /**
     * Application ID
     */
    appId: string;
    /**
     * Tenant ID
     */
    tenantId?: string;
    /**
     * List of application IDs
     */
    appIds?: Array<string>;
};
