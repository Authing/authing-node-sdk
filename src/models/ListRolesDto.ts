/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取角色列表，支持分页、支持根据权限分组（权限空间）筛选
 */
export type ListRolesDto = {
    /**
     * 当前页数，从 1 开始
     */
    page?: any;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: any;
    /**
     * 用于根据角色的 code 或者名称进行模糊搜索，可选。
     */
    keywords?: any;
    /**
     * 所属权限分组(权限空间)的 code
     */
    namespace?: any;
};
