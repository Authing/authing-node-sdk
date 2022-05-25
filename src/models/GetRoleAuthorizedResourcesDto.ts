/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 角色被授权的资源列表
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
     * 资源类型
     */
    resourceType?: any;
};
