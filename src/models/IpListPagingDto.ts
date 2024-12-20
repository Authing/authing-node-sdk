/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IpListRespDto } from './IpListRespDto';

export type IpListPagingDto = {
    /**
     *Total number of records
     */
    totalCount: number;
    /**
     * Data list
     */
    list: Array<IpListRespDto>;
};
