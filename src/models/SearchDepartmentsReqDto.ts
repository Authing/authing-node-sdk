/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SearchDepartmentsReqDto = {
    /**
     * 搜索关键词，如组织名称等
     */
    keywords: string;
    /**
     * 组织 code
     */
    organizationCode: string;
    /**
     * 是否获取自定义数据
     */
    withCustomData?: boolean;
};
