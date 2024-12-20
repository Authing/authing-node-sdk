/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CancelSyncRiskOperationsDataDto = {
    /**
     * Successfully canceled risk operation tasks
     */
    successList: Array<number>;
    /**
     * Cancel failed risk operation tasks
     */
    faildList: Array<number>;
};
