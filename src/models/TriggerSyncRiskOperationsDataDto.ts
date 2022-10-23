/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TriggerSyncRiskOperationsDataDto = {
    /**
     * 成功执行的风险操作任务
     */
    successList: Array<number>;
    /**
     * 执行失败的风险操作任务
     */
    faildList: Array<number>;
};
