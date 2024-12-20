/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get all AK/SK lists under the collaborative administrator based on the collaborative administrator ID
 */
export type ListAccessKeyDto = {
    /**
     * User ID to which the key belongs
     */
    userId?: any;
    /**
     * Tenant ID to which the key belongs
     */
    tenantId?: any;
    /**
     *Key type
     */
    type?: any;
    /**
     * AccessKey status, activated: activated, staging: graded (rotatable), revoked: revoked
     */
    status?: any;
};
