/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeleteRoleDto = {
    /**
     * 角色 code 列表
     */
    codeList: Array<string>;
    /**
     * 所属权限分组(权限空间)的 code，不传获取默认权限分组。
     */
    namespace?: string;
};
