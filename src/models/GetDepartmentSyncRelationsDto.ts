/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 如果在 Authing 中的部门进行了上下游同步，此接口可以用于查询出在第三方的关联用户信息
 */
export type GetDepartmentSyncRelationsDto = {
    /**
     * 组织 code
     */
    organizationCode?: any;
    /**
     * 部门 ID，根部门传 `root`。departmentId 和 departmentCode 必传其一。
     */
    departmentId?: any;
    /**
     * 此次调用中使用的部门 ID 的类型
     */
    departmentIdType?: any;
    /**
     * 是否获取自定义数据
     */
    withCustomData?: any;
    /**
     * 租户 ID
     */
    tenantId?: any;
};
