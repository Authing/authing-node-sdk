/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type InvitationLinkDto = {
    /**
     * 邀请链接签名
     */
    signature: string;
    /**
     * 邀请链接唯一标识
     */
    identifier: string;
    /**
     * 是否返回受邀人信息
     */
    withInviteeInfo?: boolean;
    /**
     * 是否返回邀请公共信息
     */
    withInvitationSettings?: boolean;
};
