/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateNamespaceDto = {
    /**
     * 权限分组唯一标志符
     */
    code: string;
    /**
     * 权限分组描述信息
     */
    description?: string;
    /**
     * 权限分组名称
     */
    name?: string;
    /**
     * 权限分组新的唯一标志符
     */
    newCode?: string;
};
