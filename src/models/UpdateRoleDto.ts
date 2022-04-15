/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateRoleDto = {
    /**
     * 角色 code
     */
    code: string;
    /**
     * 新的角色 code
     */
    newCode: string;
    /**
     * 权限分组
     */
    namespace?: string;
    /**
     * 角色描述
     */
    description?: string;
};
