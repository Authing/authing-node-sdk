/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InviteTenantUserRecord } from './InviteTenantUserRecord';

export type InviteTenantUserRecordListDto = {
    /**
     *Total number of records
     */
    totalCount: number;
    /**
     * Invite user history
     */
    list: Array<InviteTenantUserRecord>;
};
