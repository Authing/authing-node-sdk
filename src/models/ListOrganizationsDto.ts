/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取组织机构列表，支持分页。
 */
export type ListOrganizationsDto = {
    /**
     * 当前页数，从 1 开始
     */
    page?: any;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: any;
    /**
     * 拉取所有
     */
    fetchAll?: any;
    /**
     * 是否获取自定义数据
     */
    withCustomData?: any;
    /**
     * 租户 ID
     */
    tenantId?: any;
};
