/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CommonUserDto } from './CommonUserDto';

export type InvitationUserDto = {
    /**
     * 名单 ID
     */
    rosterId: string;
    /**
     * 受邀人 ID
     */
    inviteeId: string;
    /**
     * 受邀人名称
     */
    name: string;
    /**
     * 受邀人手机号国际区码
     */
    phoneCountryCode?: string;
    /**
     * 受邀人手机号
     */
    phone?: string;
    /**
     * 受邀人邮箱，不区分大小写
     */
    email: string;
    /**
     * 受邀人状态
     */
    status: InvitationUserDto.status;
    /**
     * 受邀人来源
     */
    source: InvitationUserDto.source;
    /**
     * 创建者 ID
     */
    creatorId: string;
    /**
     * 创建者详情
     */
    creatorDetail?: CommonUserDto;
    /**
     * 创建时间
     */
    createdAt: string;
    /**
     * 更新时间
     */
    updatedAt: string;
};

export namespace InvitationUserDto {

    /**
     * 受邀人状态
     */
    export enum status {
        INVITED = 'invited',
        REGISTERING = 'registering',
        REGISTERED = 'registered',
        REVERTED = 'reverted',
        NOT_INVITED = 'notInvited',
        EXPIRED = 'expired',
        INVITATION_SEND_FAIL = 'invitationSendFail',
        JOINED_BY_OTHER = 'joinedByOther',
    }

    /**
     * 受邀人来源
     */
    export enum source {
        MANUAL_CREATE = 'manualCreate',
        FILE_IMPORT = 'fileImport',
    }


}
