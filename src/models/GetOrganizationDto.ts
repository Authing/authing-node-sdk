/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取组织机构详情
 */
export type GetOrganizationDto = {
    /**
     * 组织 Code（organizationCode）
     */
    organizationCode?: any;
    /**
     * 是否获取自定义数据
     */
    withCustomData?: any;
    /**
     * 是否获取 部门信息
     */
    withPost?: any;
    /**
     * 租户 ID
     */
    tenantId?: any;
};
