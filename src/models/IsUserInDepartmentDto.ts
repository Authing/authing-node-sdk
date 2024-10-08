/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 通过组织 code、部门 ID，判断用户是否在某个部门下，可以选择包含子部门。
 */
export type IsUserInDepartmentDto = {
    /**
     * 用户的唯一标志，可以是用户 ID、用户名、邮箱、手机号、externalId、在外部身份源的 ID，详情见 userIdType 字段的说明。默认为用户 id 。
     */
    userId?: any;
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
     * 是否包含子部门
     */
    includeChildrenDepartments?: any;
    /**
     * 租户 ID
     */
    tenantId?: any;
};
