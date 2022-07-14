/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 通过权限分组内内角色 code，获取角色成员列表，支持分页，可以选择或获取自定义数据、identities 等。
 */
export type ListRoleMembersDto = {
    /**
     * 权限分组内角色的唯一标识符
     */
    code?: any;
    /**
     * 当前页数，从 1 开始
     */
    page?: any;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: any;
    /**
     * 是否获取自定义数据
     */
    withCustomData?: any;
    /**
     * 是否获取 identities
     */
    withIdentities?: any;
    /**
     * 是否获取部门 ID 列表
     */
    withDepartmentIds?: any;
    /**
     * 所属权限分组的 code
     */
    namespace?: any;
};
