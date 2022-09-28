/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SendResetPasswordNotificationDto } from './SendResetPasswordNotificationDto';

export type UpdateUserBatchOptionsDto = {
    /**
     * 下次登录要求重置密码
     */
    resetPasswordOnNextLogin?: boolean;
    /**
     * 密码加密类型，支持 sm2 和 rsa
     */
    passwordEncryptType?: UpdateUserBatchOptionsDto.passwordEncryptType;
    /**
     * 是否自动生成密码
     */
    autoGeneratePassword?: boolean;
    /**
     * 重置密码发送邮件和手机号选项
     */
    sendPasswordResetedNotification?: SendResetPasswordNotificationDto;
};

export namespace UpdateUserBatchOptionsDto {

    /**
     * 密码加密类型，支持 sm2 和 rsa
     */
    export enum passwordEncryptType {
        SM2 = 'sm2',
        RSA = 'rsa',
        NONE = 'none',
    }


}
