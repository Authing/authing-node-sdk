/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApprovalDetailDto } from './ApprovalDetailDto';

export type ApprovalPageList = {
    /**
     * 已发起审批列表
     */
    list: Array<ApprovalDetailDto>;
    /**
     * 记录总数
     */
    totalCount: number;
};
