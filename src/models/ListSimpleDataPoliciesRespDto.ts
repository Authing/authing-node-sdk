/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ListSimpleDataPoliciesRespDto = {
    /**
     * 数据策略 ID
     */
    policyId: string;
    /**
     * 数据策略名称权限空间内唯一
     */
    policyName: string;
    /**
     * 数据策略描述， 限长 200 字符
     */
    description?: string;
};
