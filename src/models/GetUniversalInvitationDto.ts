/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InvitationConfigDto } from './InvitationConfigDto';

export type GetUniversalInvitationDto = {
    /**
     * 管理员邀请配置
     */
    adminInvitationConfig?: InvitationConfigDto;
    /**
     * 成员邀请配置
     */
    memberInvitationConfig?: InvitationConfigDto;
    /**
     * 允许用户池成员使用链接邀请新成员加入
     */
    enabledMemberInvitation?: boolean;
};
