/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InviteeProfileDto } from './InviteeProfileDto';
import type { PolicyInviteJoinedOptionsDto } from './PolicyInviteJoinedOptionsDto';

export type PolicyInviteeJoinedDto = {
    /**
     * 邀请注册凭证
     */
    token: string;
    /**
     * 验证码
     */
    code?: string;
    /**
     * 验证码获取模式
     * - `emailCode`: 邮箱验证码
     * - `smsCode`: 短信验证码
     */
    receiverType?: PolicyInviteeJoinedDto.receiverType;
    /**
     * 用户资料
     */
    profile?: InviteeProfileDto;
    /**
     * 可选参数
     */
    options?: PolicyInviteJoinedOptionsDto;
};

export namespace PolicyInviteeJoinedDto {

    /**
     * 验证码获取模式
     * - `emailCode`: 邮箱验证码
     * - `smsCode`: 短信验证码
     */
    export enum receiverType {
        SMS_CODE = 'smsCode',
        EMAIL_CODE = 'emailCode',
    }


}
