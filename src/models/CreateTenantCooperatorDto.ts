/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateTenantCooperatorDto = {
    /**
     * Strategy
     */
    policies: Array<string>;
    /**
     *User ID
     */
    userId: string;
    /**
     * Whether to authorize API
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
