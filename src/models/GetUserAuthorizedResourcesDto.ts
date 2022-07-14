/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 通过用户 ID，获取用户被授权的所有资源，可以选择指定用户 ID 类型等，用户被授权的资源是用户自身被授予、通过分组继承、通过角色继承、通过组织机构继承的集合。
 */
export type GetUserAuthorizedResourcesDto = {
    /**
     * 用户 ID
     */
    userId?: any;
    /**
     * 用户 ID 类型，可以指定为用户 ID、手机号、邮箱、用户名和 externalId。
     */
    userIdType?: any;
    /**
     * 所属权限分组的 code
     */
    namespace?: any;
    /**
     * 资源类型，如 数据、API、菜单、按钮
     */
    resourceType?: any;
};
