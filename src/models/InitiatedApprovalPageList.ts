/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InitiatedApproval } from './InitiatedApproval';

export type InitiatedApprovalPageList = {
    /**
     * 已发起审批列表
     */
    list: Array<InitiatedApproval>;
    /**
     * 记录总数
     */
    totalCount: number;
};
