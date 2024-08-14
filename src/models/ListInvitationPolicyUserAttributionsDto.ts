/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取邀请策略用户归属列表
 */
export type ListInvitationPolicyUserAttributionsDto = {
    /**
     * 策略 ID
     */
    policyId?: any;
    /**
     * 关联对象类型
     */
    targetType?: any;
    /**
     * 当前页数，从 1 开始
     */
    page?: any;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: any;
    /**
     * 是否返回关联对象详情
     */
    withTargetDetail?: any;
    /**
     * 当关联对象是部门时，是否返回部门其他详细信息，包括 namePath, codePath, idPath
     */
    withDepartmentExtInfo?: any;
};
