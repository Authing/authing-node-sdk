/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CancelSyncRiskOperationsDataDto = {
    /**
     * 成功取消的风险操作任务
     */
    successList: Array<number>;
    /**
     * 取消失败的风险操作任务
     */
    faildList: Array<number>;
};
