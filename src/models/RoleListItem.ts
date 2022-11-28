/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RoleListItem = {
    /**
     * 权限分组内角色的唯一标识符
     */
    code: string;
    /**
     * 权限分组内角色名称
     */
    name?: string;
    /**
     * 角色描述
     */
    description?: string;
    /**
     * 所属权限分组(权限空间)的 code
     */
    namespace?: string;
};
