/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取子部门列表
 */
export type ListChildrenDepartmentsDto = {
    /**
     * 需要获取的部门 ID
     */
    departmentId?: any;
    /**
     * 组织 code
     */
    organizationCode?: any;
    /**
     * 此次调用中使用的部门 ID 的类型
     */
    departmentIdType?: any;
};
