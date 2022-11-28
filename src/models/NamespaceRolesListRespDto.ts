/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NamespaceRolesListRespDto = {
    /**
     * 角色 ID
     */
    id: string;
    /**
     * 角色名称
     */
    name: string;
    /**
     * 角色 Code
     */
    code: string;
    /**
     * 角色 描述信息
     */
    description?: string;
    /**
     * 权限分组 Code
     */
    namespace: string;
    /**
     * 更新时间
     */
    updatedAt: string;
};
