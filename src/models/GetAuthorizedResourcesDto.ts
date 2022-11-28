/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 根据筛选条件，获取某个主体被授权的资源列表。
 */
export type GetAuthorizedResourcesDto = {
    /**
     * 目标对象类型：
     * - `USER`: 用户
     * - `ROLE`: 角色
     * - `GROUP`: 分组
     * - `DEPARTMENT`: 部门
     *
     */
    targetType?: any;
    /**
     * 目标对象的唯一标志符：
     * - 如果是用户，为用户的 ID，如 `6343b98b7cfxxx9366e9b7c`
     * - 如果是角色，为角色的 code，如 `admin`
     * - 如果是分组，为分组的 code，如 `developer`
     * - 如果是部门，为部门的 ID，如 `6343bafc019xxxx889206c4c`
     *
     */
    targetIdentifier?: any;
    /**
     * 所属权限分组(权限空间)的 Code
     */
    namespace?: any;
    /**
     * 限定资源类型，如数据、API、按钮、菜单
     */
    resourceType?: any;
    /**
     * 限定查询的资源列表，如果指定，只会返回所指定的资源列表。
     */
    resourceList?: any;
    /**
     * 是否获取被拒绝的资源
     */
    withDenied?: any;
};
