/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 搜索部门下的成员
 */
export type SearchDepartmentMembersDto = {
    /**
     * 组织 code
     */
    organizationCode?: any;
    /**
     * 部门 id，根部门传 `root`
     */
    departmentId?: any;
    /**
     * 搜索关键词
     */
    keywords?: any;
    /**
     * 当前页数，从 1 开始
     */
    page?: any;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: any;
    /**
     * 此次调用中使用的部门 ID 的类型
     */
    departmentIdType?: any;
    /**
     * 是否包含子部门的成员
     */
    includeChildrenDepartments?: any;
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
};
