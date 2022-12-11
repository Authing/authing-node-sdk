/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ListSimpleDataPoliciesRespDto } from './ListSimpleDataPoliciesRespDto';

export type DataPoliciesSimplePaginatedRespDto = {
    /**
     * 记录总数
     */
    totalCount?: number;
    /**
     * 响应数据
     */
    list: Array<ListSimpleDataPoliciesRespDto>;
};
