/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EventAppDto } from './EventAppDto';

export type EventAppPagingDto = {
    /**
     *Total number of records
     */
    totalCount: number;
    /**
     * Data list
     */
    list: Array<EventAppDto>;
};
