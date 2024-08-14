/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InviteeContextDto } from './InviteeContextDto';

export type GenerateInviteeTokenDto = {
    /**
     * 受邀人点击链接后生成的 `token`，根据 `token` 可获取受邀人信息及完成邀请注册流程
     */
    token?: string;
    /**
     * 邀请信息
     */
    invitationContext?: InviteeContextDto;
};
