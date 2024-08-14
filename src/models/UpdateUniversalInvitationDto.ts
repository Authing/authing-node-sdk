/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateUniversalInvitationDto = {
    /**
     * 管理员邀请配置
     */
    adminInvitationConfig?: boolean;
    /**
     * 成员邀请配置
     */
    memberInvitationConfig?: boolean;
    /**
     * 允许用户池成员使用链接邀请新成员加入
     */
    enabledMemberInvitation?: boolean;
};
