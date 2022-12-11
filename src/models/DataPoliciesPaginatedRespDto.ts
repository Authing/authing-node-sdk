/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ListDataPoliciesRespDto } from './ListDataPoliciesRespDto';

export type DataPoliciesPaginatedRespDto = {
    /**
     * 记录总数
     */
    totalCount: number;
    /**
     * 响应数据
     */
    list: Array<ListDataPoliciesRespDto>;
};
