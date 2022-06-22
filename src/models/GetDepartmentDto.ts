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
     * 部门 id，根部门传 `root`。departmentId 和 departmentCode 必传其一。
     */
    departmentId?: any;
    /**
     * 部门 code。departmentId 和 departmentCode 必传其一。
     */
    departmentCode?: any;
    /**
     * 此次调用中使用的部门 ID 的类型
     */
    departmentIdType?: any;
    /**
     * 是否获取自定义数据
     */
    withCustomData?: any;
};
