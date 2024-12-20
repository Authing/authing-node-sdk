/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ListDataResourcesRespDto } from './ListDataResourcesRespDto';

export type DataResourcesPaginatedRespDto = {
    /**
     *Total number of records
     */
    totalCount: number;
    /**
     *Response data
     */
    list: Array<ListDataResourcesRespDto>;
};
