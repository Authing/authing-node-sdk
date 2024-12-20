/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateTenantDto = {
    /**
     * Tenant name
     */
    name: string;
    /**
     * The application ID associated with the tenant
     */
    appIds: Array<string>;
    /**
     * Tenant logo
     */
    logo?: Array<string>;
    /**
     * Tenant description
     */
    description?: string;
    /**
     * The prompt text displayed when the user is refused login by the tenant
     */
    rejectHint?: string;
    /**
     * The application ID of the tenant source. If this value does not exist, it means the tenant source is the Authing console.
     */
    sourceAppId?: string;
    /**
     *Business email domain name
     */
    enterpriseDomains?: Array<string>;
    /**
     * Tenant expiration time
     */
    expireTime?: string;
    /**
     * Tenant MAU cap
     */
    mauAmount?: number;
    /**
     *Maximum number of tenant members
     */
    memberAmount?: number;
    /**
     *Tenant administrator limit
     */
    adminAmount?: number;
};
