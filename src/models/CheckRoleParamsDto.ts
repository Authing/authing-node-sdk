/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CheckRoleParamsDto = {
    /**
     * 权限分组（权限空间）内角色的唯一标识符
     */
    code: string;
    /**
     * 所属权限分组(权限空间)的 Code，不传使用默认权限分组。
     */
    namespace: string;
    /**
     * 权限分组（权限空间）内角色名称
     */
    name?: string;
};
