/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 通过用户 ID，获取用户被授权的所有资源，可以选择指定用户 ID 类型等，用户被授权的资源是用户自身被授予、通过分组继承、通过角色继承、通过组织机构继承的集合。
 */
export type GetUserAuthorizedResourcesDto = {
    /**
     * 用户唯一标志，可以是用户 ID、用户名、邮箱、手机号、外部 ID、在外部身份源的 ID。
     */
    userId?: any;
    /**
     * 用户 ID 类型，默认值为 `user_id`，可选值为：
     * - `user_id`: Authing 用户 ID，如 `6319a1504f3xxxxf214dd5b7`
     * - `phone`: 用户手机号
     * - `email`: 用户邮箱
     * - `username`: 用户名
     * - `external_id`: 用户在外部系统的 ID，对应 Authing 用户信息的 `externalId` 字段
     * - `identity`: 用户的外部身份源信息，格式为 `<extIdpId>:<userIdInIdp>`，其中 `<extIdpId>` 为 Authing 身份源的 ID，`<userIdInIdp>` 为用户在外部身份源的 ID。
     * 示例值：`62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`。
     *
     */
    userIdType?: any;
    /**
     * 所属权限分组(权限空间)的 Code
     */
    namespace?: any;
    /**
     * 资源类型，如 数据、API、菜单、按钮
     */
    resourceType?: any;
};
