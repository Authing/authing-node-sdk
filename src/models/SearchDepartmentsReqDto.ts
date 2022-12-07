/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SearchDepartmentsReqDto = {
    /**
     * 组织 code
     */
    organizationCode: string;
    /**
     * 搜索关键词，如组织名称等
     */
    keywords: string;
    /**
     * 是否获取自定义数据
     */
    withCustomData?: boolean;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: number;
};
