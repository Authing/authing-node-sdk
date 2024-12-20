/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateAccessKeyDto = {
    /**
     *Key type
     */
    type: string;
    /**
     * User ID to which the key belongs
     */
    userId?: string;
    /**
     * Tenant ID to which the key belongs
     */
    tenantId?: string;
};
