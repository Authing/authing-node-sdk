/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateRoleDto = {
    /**
     * 权限分组（权限空间）内角色的唯一标识符
     */
    code: string;
    /**
     * 权限分组（权限空间）内角色名称
     */
    name?: string;
    /**
     * 所属权限分组(权限空间)的 code
     */
    namespace?: string;
    /**
     * 角色描述
     */
    description?: string;
    /**
     * 角色自动禁止时间，单位毫秒, 如果传null表示永久有效
     */
    disableTime?: string;
};
