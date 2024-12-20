/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ListSimpleDataPoliciesRespDto } from './ListSimpleDataPoliciesRespDto';

export type DataPoliciesSimplePaginatedRespDto = {
    /**
     * Total
     */
    totalCount?: number;
    /**
     * Data list
     */
    list: Array<ListSimpleDataPoliciesRespDto>;
};
