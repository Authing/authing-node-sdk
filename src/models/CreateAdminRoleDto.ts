/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateAdminRoleDto = {
    /**
     * 管理员角色名称
     */
    name: string;
    /**
     * 管理员角色的唯一标识符
     */
    code: string;
    /**
     * 角色描述
     */
    description?: string;
};
