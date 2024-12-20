/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InitiatedApproval } from './InitiatedApproval';

export type InitiatedApprovalPageList = {
    /**
     * Approval list initiated
     */
    list: Array<InitiatedApproval>;
    /**
     *Total number of records
     */
    totalCount: number;
};
