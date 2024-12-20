/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeleteAsaAccountBatchDto = {
    /**
     * ASA account ID list
     */
    accountIds: Array<string>;
    /**
     * The application ID to which it belongs
     */
    appId: string;
};
