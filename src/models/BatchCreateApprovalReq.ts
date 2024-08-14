/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExtraParams } from './ExtraParams';

export type BatchCreateApprovalReq = {
    /**
     * 发起审批对象类型，目前支持：应用权限申请（APP_PERMISSION_APPLY）、角色权限申请（ROLE_PERMISSION_APPLY）
     */
    objectType: BatchCreateApprovalReq.objectType;
    /**
     * 审批对象 ID 列表，目前支持：角色 ID、应用 ID
     */
    objectIds: Array<string>;
    /**
     * 额外参数，目前仅支持：角色权限申请（ROLE_PERMISSION_APPLY）
     */
    extraParams?: ExtraParams;
};

export namespace BatchCreateApprovalReq {

    /**
     * 发起审批对象类型，目前支持：应用权限申请（APP_PERMISSION_APPLY）、角色权限申请（ROLE_PERMISSION_APPLY）
     */
    export enum objectType {
        APP_PERMISSION_APPLY = 'APP_PERMISSION_APPLY',
        ROLE_PERMISSION_APPLY = 'ROLE_PERMISSION_APPLY',
    }


}
