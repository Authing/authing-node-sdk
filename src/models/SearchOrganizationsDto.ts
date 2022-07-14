/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 通过搜索关键词，搜索顶层组织机构列表，支持分页。
 */
export type SearchOrganizationsDto = {
    /**
     * 搜索关键词，如组织机构名称
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
};
