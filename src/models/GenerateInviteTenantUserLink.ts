/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GenerateInviteTenantUserLink = {
    /**
     * Link validity period
     */
    validityTerm: string;
    /**
     * Email address of the user to be invited
     */
    emails: Array<string>;
    /**
     * Application ID
     */
    appId: string;
    /**
     * Tenant ID
     */
    tenantId?: string;
};
