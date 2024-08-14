/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UniversalInviteeProfileDto } from './UniversalInviteeProfileDto';

export type UniversalInvitationUserJoinDto = {
    /**
     * 邮箱验证码
     */
    emailCode: string;
    /**
     * 邀请链接唯一标识
     */
    identifier: string;
    /**
     * 用户资料
     */
    profile?: UniversalInviteeProfileDto;
};
