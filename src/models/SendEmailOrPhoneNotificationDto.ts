/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SendEmailOrPhoneNotificationDto = {
    /**
     * 邮箱
     */
    sendEmailNotification?: string;
    /**
     * 手机号
     */
    sendPhoneNotification?: string;
    /**
     * 应用 id
     */
    appId?: string;
};
