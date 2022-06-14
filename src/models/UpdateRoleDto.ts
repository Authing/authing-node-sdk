/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateRoleDto = {
    /**
     * 角色新的权限分组内唯一识别码
     */
    newCode: string;
    /**
     * 权限分组内角色的唯一标识符
     */
    code: string;
    /**
     * 所属权限分组的 code
     */
    namespace?: string;
    /**
     * 角色描述
     */
    description?: string;
};
