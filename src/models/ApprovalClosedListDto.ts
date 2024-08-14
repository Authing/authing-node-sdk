/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取已办审批列表
 */
export type ApprovalClosedListDto = {
    /**
     * 当前页数，从 1 开始
     */
    pageNo?: any;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    pageSize?: any;
    /**
     * 发起审批对象类型，目前支持：应用权限申请（APP_PERMISSION_APPLY）、角色权限申请（ROLE_PERMISSION_APPLY）
     */
    objectType?: any;
    /**
     * 用于根据审批编号或者发起人名称进行模糊搜索，可选。
     */
    keyword?: any;
};
