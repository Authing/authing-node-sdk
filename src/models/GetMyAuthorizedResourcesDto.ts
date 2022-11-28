/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 此接口用于获取用户被授权的资源列表。
 */
export type GetMyAuthorizedResourcesDto = {
    /**
     * 所属权限分组(权限空间)的 Code
     */
    namespace?: any;
    /**
     * 资源类型，如 数据、API、菜单、按钮
     */
    resourceType?: any;
};
