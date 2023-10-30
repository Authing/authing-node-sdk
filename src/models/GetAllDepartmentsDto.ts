/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取所有部门列表，可以用于获取某个组织下的所有部门列表。
 */
export type GetAllDepartmentsDto = {
    /**
     * 组织 code
     */
    organizationCode?: any;
    /**
     * 部门 ID，不填写默认为 `root` 根部门 ID
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
