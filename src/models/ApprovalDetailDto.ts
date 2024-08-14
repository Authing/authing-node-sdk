/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApplicationPermissionApplyApprovalObject } from './ApplicationPermissionApplyApprovalObject';
import type { ExtraParams } from './ExtraParams';
import type { RolePermissionApplyApprovalObject } from './RolePermissionApplyApprovalObject';

export type ApprovalDetailDto = {
    /**
     * 审批 ID
     */
    approvalId: number;
    /**
     * 审批编号
     */
    number: string;
    /**
     * 审批状态
     */
    status: ApprovalDetailDto.status;
    /**
     * 提交时间
     */
    submitTime: string;
    /**
     * 办结时间
     */
    closedTime?: string;
    /**
     * 发起审批对象类型，目前支持：应用权限申请（APP_PERMISSION_APPLY）、角色权限申请（ROLE_PERMISSION_APPLY）
     */
    objectType: ApprovalDetailDto.objectType;
    /**
     * 审批对象（数组）
     */
    approvalObjectList: (RolePermissionApplyApprovalObject | ApplicationPermissionApplyApprovalObject);
    /**
     * 额外参数，目前仅支持：角色权限申请（ROLE_PERMISSION_APPLY）
     */
    extraParams?: ExtraParams;
};

export namespace ApprovalDetailDto {

    /**
     * 审批状态
     */
    export enum status {
        PENDING = 'PENDING',
        AGREED = 'AGREED',
        REFUSED = 'REFUSED',
    }

    /**
     * 发起审批对象类型，目前支持：应用权限申请（APP_PERMISSION_APPLY）、角色权限申请（ROLE_PERMISSION_APPLY）
     */
    export enum objectType {
        APP_PERMISSION_APPLY = 'APP_PERMISSION_APPLY',
        ROLE_PERMISSION_APPLY = 'ROLE_PERMISSION_APPLY',
    }


}
