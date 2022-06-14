/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取角色的部门列表
 */
export type ListRoleDepartmentsDto = {
    /**
     * 权限分组内角色的唯一标识符
     */
    code?: any;
    /**
     * 所属权限分组的 code
     */
    namespace?: any;
    /**
     * 当前页数，从 1 开始
     */
    page?: any;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: any;
};
