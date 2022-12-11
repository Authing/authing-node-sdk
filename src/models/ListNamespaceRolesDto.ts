/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 根据筛选条件，分页获取权限分组下所有的角色列表。
 */
export type ListNamespaceRolesDto = {
    /**
     * 权限分组唯一标志符
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
    keywords?: any;
};
