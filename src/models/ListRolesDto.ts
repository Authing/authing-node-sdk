/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取角色列表
 */
export type ListRolesDto = {
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
