/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InvitationUserDto } from './InvitationUserDto';

export type InvitationUserPaginationDto = {
    /**
     *Total number of records
     */
    totalCount?: number;
    /**
     * List data
     */
    list: Array<InvitationUserDto>;
};
