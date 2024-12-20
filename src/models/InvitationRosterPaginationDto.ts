/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InvitationRosterDto } from './InvitationRosterDto';

export type InvitationRosterPaginationDto = {
    /**
     *Total number of records
     */
    totalCount?: number;
    /**
     * List data
     */
    list: Array<InvitationRosterDto>;
};
