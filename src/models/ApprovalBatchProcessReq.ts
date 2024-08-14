/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ApprovalBatchProcessReq = {
    /**
     * 审批编号列表
     */
    numbers: Array<number>;
    /**
     * 是否同意，默认为 false
     */
    isAgreed?: boolean;
};
