/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 批量获取组织机构详情
 */
export type GetOrganizationBatchDto = {
    /**
     * 组织 Code（organizationCode）列表
     */
    organizationCodeList?: any;
    /**
     * 是否获取自定义数据
     */
    withCustomData?: any;
    /**
     * 租户 ID
     */
    tenantId?: any;
};
