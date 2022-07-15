/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SendResetPasswordNotificationDto = {
    /**
     * 重置密码之后，是否发送用户默认邮件通知
     */
    sendDefaultEmailNotification?: boolean;
    /**
     * 重置密码之后，是否发送用户默认短信通知
     */
    sendDefaultPhoneNotification?: boolean;
    /**
     * 当用户密码修改之后，输入发送邮箱
     */
    inputSendEmailNotification?: string;
    /**
     * 当用户密码修改之后，输入发送手机号
     */
    inputSendPhoneNotification?: string;
    /**
     * 发送登录地址时，指定的应用 id，会将此应用的登录地址发送给用户的邮箱或者手机号。默认为用户池应用面板的登录地址。
     */
    appId?: string;
};
