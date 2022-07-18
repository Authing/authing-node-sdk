/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateNamespaceDto = {
    /**
     * 权限分组唯一标志符
     */
    code: string;
    /**
     * 权限分组名称
     */
    name?: string;
    /**
     * 权限分组描述信息
     */
    description?: string;
};
