/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 分页查询权限空间下所有的角色列表，分页获取权限空间下所有的角色列表。
 */
export type ListPermissionNamespaceRolesDto = {
    /**
     * 权限分组唯一标志符 Code
     */
    code?: any;
    /**
     * 当前页数，从 1 开始
     */
    page?: any;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: any;
    /**
     * 角色 Code 或者名称
     */
    query?: any;
};
