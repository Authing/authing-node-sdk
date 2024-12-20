/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateMultipleTenantAdminDto = {
    /**
     * Tenant ID
     */
    tenantIds: Array<string>;
    /**
     *User ID
     */
    userId: string;
    /**
     * Whether to authorize
     */
    apiAuthorized?: boolean;
    /**
     * SMS notification
     */
    sendPhoneNotification?: boolean;
    /**
     * Email notification
     */
    sendEmailNotification?: boolean;
};
