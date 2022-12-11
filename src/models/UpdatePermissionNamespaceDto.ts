/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdatePermissionNamespaceDto = {
    /**
     * 权限分组老的唯一标志符 Code
     */
    code: string;
    /**
     * 权限空间名称
     */
    name?: string;
    /**
     * 权限分组新的唯一标志符 Code
     */
    newCode?: string;
    /**
     * 权限空间描述
     */
    description?: string;
};
