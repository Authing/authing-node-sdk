/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeleteRoleDto = {
    /**
     * 角色 code 列表
     */
    codeList: Array<string>;
    /**
     * 所属权限分组的 code
     */
    namespace?: string;
};
