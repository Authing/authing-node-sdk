/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SendEmailOrPhoneNotificationDto } from './SendEmailOrPhoneNotificationDto';

export type UpdateUserOptionsDto = {
    /**
     * 下次登录要求重置密码
     */
    resetPasswordOnNextLogin?: boolean;
    /**
     * 重置密码发送邮件和手机号选项
     */
    sendEmailOrPhoneNotification?: SendEmailOrPhoneNotificationDto;
};
