/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RiskListPolicyRespDto } from './RiskListPolicyRespDto';

export type RiskListPolicyPagingDto = {
    /**
     * 记录总数
     */
    totalCount: number;
    /**
     * 数据列表
     */
    list: Array<RiskListPolicyRespDto>;
};
