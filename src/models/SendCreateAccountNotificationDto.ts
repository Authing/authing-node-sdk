/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SendCreateAccountNotificationDto = {
    /**
     * 创建账号之后，是否发送邮件通知
     */
    sendEmailNotification?: boolean;
    /**
     * 创建账号之后，是否发送短信通知
     */
    sendPhoneNotification?: boolean;
    /**
     * 发送登录地址时，指定的应用 id，会将此应用的登录地址发送给用户的邮箱或者手机号。默认为用户池应用面板的登录地址。
     */
    appId?: string;
};
