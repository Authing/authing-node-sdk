/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取用户被授权的所有资源，用户被授权的资源是用户自身被授予、通过分组继承、通过角色继承、通过组织机构继承的集合
 */
export type GetUserAuthorizedResourcesDto = {
    /**
     * 用户 ID
     */
    userId?: any;
    /**
     * 所属权限分组的 code
     */
    namespace?: any;
    /**
     * 资源类型
     */
    resourceType?: any;
};
