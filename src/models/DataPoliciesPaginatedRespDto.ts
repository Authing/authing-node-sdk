/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ListDataPoliciesRespDto } from './ListDataPoliciesRespDto';

export type DataPoliciesPaginatedRespDto = {
    /**
     * Total
     */
    totalCount: number;
    /**
     * Data list
     */
    list: Array<ListDataPoliciesRespDto>;
};
