/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 通过权限分组内角色 code，获取角色详情。
 */
export type GetRoleDto = {
    /**
     * 权限分组(权限空间)内角色的唯一标识符
     */
    code?: any;
    /**
     * 所属权限分组(权限空间)的 Code，不传获取默认权限分组。
     */
    namespace?: any;
};
