/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateTenantCooperatorDto = {
    /**
     * 策略
     */
    policies: Array<string>;
    /**
     * 用户 ID
     */
    userId: string;
    /**
     * 是否授权 API
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
