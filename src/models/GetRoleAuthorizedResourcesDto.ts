/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 通过权限分组内角色 code，获取角色被授权的资源列表。
 */
export type GetRoleAuthorizedResourcesDto = {
    /**
     * 权限分组内角色的唯一标识符
     */
    code?: any;
    /**
     * 所属权限分组的 code
     */
    namespace?: any;
    /**
     * 资源类型，如 数据、API、按钮、菜单
     */
    resourceType?: any;
};
