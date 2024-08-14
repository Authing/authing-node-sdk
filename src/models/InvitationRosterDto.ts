/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CommonUserDto } from './CommonUserDto';
import type { GetInvitationPolicyDto } from './GetInvitationPolicyDto';

export type InvitationRosterDto = {
    /**
     * 名单 ID
     */
    rosterId: string;
    /**
     * 名单名称
     */
    name: string;
    /**
     * 关联的策略 ID
     */
    policyId?: string;
    /**
     * 名单状态
     */
    status: InvitationRosterDto.status;
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
    /**
     * 关联用户数量
     */
    userCount: number;
    /**
     * 关联策略
     */
    assignedPolicy: GetInvitationPolicyDto;
};

export namespace InvitationRosterDto {

    /**
     * 名单状态
     */
    export enum status {
        EDITING = 'editing',
        INVITED = 'invited',
    }


}
