/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VerifyInviteCodeDto = {
    /**
     * 验证码类型
     * - `emailCode`: 邮箱验证码
     * - `smsCode`: 短信验证码
     *
     */
    receiverType: VerifyInviteCodeDto.receiverType;
    /**
     * 验证码
     */
    code: string;
    /**
     * 邀请注册凭证
     */
    token: string;
};

export namespace VerifyInviteCodeDto {

    /**
     * 验证码类型
     * - `emailCode`: 邮箱验证码
     * - `smsCode`: 短信验证码
     *
     */
    export enum receiverType {
        SMS_CODE = 'smsCode',
        EMAIL_CODE = 'emailCode',
    }


}
