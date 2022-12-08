/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetDataPolicyRespDto = {
    /**
     * 数据策略 ID
     */
    policyId: string;
    /**
     * 数据策略名称，用户池唯一
     */
    policyName: string;
    /**
     * 数据策略描述
     */
    description?: string;
    /**
     * 数据策略创建时间
     */
    createdAt: string;
    /**
     * 数据策略更新时间
     */
    updatedAt: string;
};
