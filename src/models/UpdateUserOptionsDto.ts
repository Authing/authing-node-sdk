/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SendResetPasswordNotificationDto } from './SendResetPasswordNotificationDto';

export type UpdateUserOptionsDto = {
    /**
     * 用户 ID 类型，可以指定为用户 ID、手机号、邮箱、用户名和 externalId。
     */
    userIdType?: UpdateUserOptionsDto.userIdType;
    /**
     * 下次登录要求重置密码
     */
    resetPasswordOnNextLogin?: boolean;
    /**
     * 是否自动生成密码
     */
    autoGeneratePassword?: boolean;
    /**
     * 重置密码发送邮件和手机号选项
     */
    sendPasswordResetedNotification?: SendResetPasswordNotificationDto;
};

export namespace UpdateUserOptionsDto {

    /**
     * 用户 ID 类型，可以指定为用户 ID、手机号、邮箱、用户名和 externalId。
     */
    export enum userIdType {
        USER_ID = 'user_id',
        EXTERNAL_ID = 'external_id',
        PHONE = 'phone',
        EMAIL = 'email',
        USERNAME = 'username',
    }


}
