/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ListUsersOptionsDto = {
    /**
     * 当前页数，从 1 开始
     */
    page: number;
    /**
     * 每页数目，最大不能超过 100，默认为 10
     */
    limit: number;
    /**
     * 是否获取自定义数据
     */
    withCustomData?: boolean;
    /**
     * 是否获取 identities
     */
    withIdentities?: boolean;
    /**
     * 是否获取部门 ID 列表
     */
    withDepartmentIds?: boolean;
};
