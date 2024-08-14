/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CommonUserDto } from './CommonUserDto';

export type UniversalInvitationApplicantData = {
    /**
     * 申请 ID
     */
    id: string;
    /**
     * 申请人
     */
    applicant: string;
    /**
     * 邮箱
     */
    email: string;
    /**
     * 邀请人 ID
     */
    inviterId: string;
    /**
     * 审批人 ID
     */
    operatorId?: string;
    /**
     * 审批状态:
     * - `PENDING`: 待审批
     * - `PASSED`: 已通过
     * - `REJECTED`: 已拒绝
     */
    status: UniversalInvitationApplicantData.status;
    /**
     * 加入方式:
     * - `MANUAL`: 人工审批
     * - `AUTO`: 自动加入
     */
    channel: UniversalInvitationApplicantData.channel;
    /**
     * 邀请人详情
     */
    inviterDetail?: CommonUserDto;
    /**
     * 审批人详情
     */
    operatorDetail?: CommonUserDto;
};

export namespace UniversalInvitationApplicantData {

    /**
     * 审批状态:
     * - `PENDING`: 待审批
     * - `PASSED`: 已通过
     * - `REJECTED`: 已拒绝
     */
    export enum status {
        PENDING = 'PENDING',
        PASSED = 'PASSED',
        REJECTED = 'REJECTED',
    }

    /**
     * 加入方式:
     * - `MANUAL`: 人工审批
     * - `AUTO`: 自动加入
     */
    export enum channel {
        MANUAL = 'MANUAL',
        AUTO = 'AUTO',
    }


}
