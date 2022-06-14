/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取部门信息
 */
export type GetDepartmentDto = {
    /**
     * 组织 code
     */
    organizationCode?: any;
    /**
     * 部门 id，根部门传 `root`
     */
    departmentId?: any;
    /**
     * 此次调用中使用的部门 ID 的类型
     */
    departmentIdType?: any;
};
