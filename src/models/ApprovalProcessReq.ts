/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ApprovalProcessReq = {
    /**
     * 审批编号
     */
    number: string;
    /**
     * 是否同意，默认为 false
     */
    isAgreed?: boolean;
};
