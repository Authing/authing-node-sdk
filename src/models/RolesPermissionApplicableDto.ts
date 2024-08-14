/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取可申请权限的角色列表
 */
export type RolesPermissionApplicableDto = {
    /**
     * Authing 应用 ID
     */
    appId?: any;
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
    keyword?: any;
};
