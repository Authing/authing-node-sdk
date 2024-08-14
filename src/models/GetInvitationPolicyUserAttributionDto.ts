/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取邀请策略用户归属详情
 */
export type GetInvitationPolicyUserAttributionDto = {
    /**
     * 归属关联记录 ID
     */
    id?: any;
    /**
     * 是否返回关联对象详情
     */
    withTargetDetail?: any;
    /**
     * 当关联对象是部门时，是否返回部门其他详细信息，包括 namePath, codePath, idPath
     */
    withDepartmentExtInfo?: any;
};
