/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RoleDto = {
    /**
     * 权限分组(权限空间)内角色的唯一标识符 Code
     */
    code: string;
    /**
     * 权限分组(权限空间)内角色名称
     */
    name: string;
    /**
     * 角色描述
     */
    description: string;
    /**
     * 所属权限分组(权限空间)的 Code
     */
    namespace: string;
    /**
     * 所属权限分组(权限空间)的名称
     */
    namespaceName: string;
    /**
     * 角色状态，ENABLE-表示正常，DISABLE-表示禁止
     */
    status?: string;
};
