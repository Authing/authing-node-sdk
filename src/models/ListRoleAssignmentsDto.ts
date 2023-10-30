/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取角色授权列表。
 */
export type ListRoleAssignmentsDto = {
    /**
     * 角色 code,只能使用字母、数字和 -_，最多 50 字符
     */
    roleCode?: any;
    /**
     * 当前页数，从 1 开始
     */
    page?: any;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: any;
    /**
     * 按角色 Code 或者角色名称查询
     */
    query?: any;
    /**
     * 权限空间code
     */
    namespaceCode?: any;
    /**
     * 目标类型，接受用户，部门
     */
    targetType?: any;
};
