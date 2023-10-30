/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 根据部门id查询部门
 */
export type GetDepartmentByIdDto = {
    /**
     * 部门 ID
     */
    departmentId?: any;
    /**
     * 租户 ID
     */
    tenantId?: any;
    /**
     * 是否获取自定义数据
     */
    withCustomData?: any;
};
