/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 通过组织 code、部门 ID，获取父部门信息，可以选择获取自定义数据等。
 */
export type GetParentDepartmentDto = {
    /**
     * 组织 code
     */
    organizationCode?: any;
    /**
     * 部门 ID
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
};
