/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeleteAsaAccountBatchDto = {
    /**
     * ASA 账号 ID 列表
     */
    accountIds: Array<string>;
    /**
     * 所属应用 ID
     */
    appId: string;
};
