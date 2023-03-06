/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateMultipleTenantAdminDto = {
    /**
     * 租户 ID
     */
    tenantIds: Array<string>;
    /**
     * 用户 ID
     */
    userId: string;
    /**
     * 是否授权
     */
    apiAuthorized?: boolean;
    /**
     * SMS 通知
     */
    sendPhoneNotification?: boolean;
    /**
     * Email 通知
     */
    sendEmailNotification?: boolean;
};
