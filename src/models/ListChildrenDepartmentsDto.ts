/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 通过组织 code、部门 ID，获取子部门列表，可以选择获取自定义数据、虚拟组织等。
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
     * 是否只包含虚拟组织
     */
    onlyVirtualNode?: any;
    /**
     * 是否获取自定义数据
     */
    withCustomData?: any;
};
