/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 判断用户是否在某个部门下
 */
export type IsUserInDepartmentDto = {
    /**
     * 用户 ID
     */
    userId?: any;
    /**
     * 组织 code
     */
    organizationCode?: any;
    /**
     * 部门 id，根部门传 `root`。departmentId 和 departmentCode 必传其一。
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
};
