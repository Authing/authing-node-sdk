/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取子部门列表
 */
export type ListChildrenDepartmentsDto = {
    /**
     * 组织 code
     */
    organizationCode?: any;
    /**
     * 需要获取的部门 ID
     */
    departmentId?: any;
    /**
     * 此次调用中使用的部门 ID 的类型
     */
    departmentIdType?: any;
    /**
     * 是否要排除虚拟组织
     */
    excludeVirtualNode?: any;
    /**
     * 是否获取自定义数据
     */
    withCustomData?: any;
};
