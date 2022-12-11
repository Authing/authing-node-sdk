/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取数据策略下所有的授权主体的信息，通过授权主体类型、数据策略 ID 和数据资源 ID 查找授权主体列表。
 */
export type ListDataPolicyTargetsDto = {
    /**
     * 数据策略 ID
     */
    policyId?: any;
    /**
     * 当前页数，从 1 开始
     */
    page?: any;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: any;
    /**
     * 数据策略名称搜索
     */
    query?: any;
    /**
     * 主体类型,包括 USER、GROUP、ROLE、ORG 四种类型
     */
    targetType?: any;
};
