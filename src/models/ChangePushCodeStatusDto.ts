/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ChangePushCodeStatusDto = {
    /**
     * Push code (push login unique ID)
     */
    pushCodeId: string;
    /**
     * Action to modify push code status:
     * - `CONFIRM`: Change push code status to authorized;
     * - `CANCEL`: Modify push code status to canceled;
     *
     */
    action: ChangePushCodeStatusDto.action;
};

export namespace ChangePushCodeStatusDto {

    /**
     * Action to modify push code status:
     * - `CONFIRM`: Change push code status to authorized;
     * - `CANCEL`: Modify push code status to canceled;
     *
     */
    export enum action {
        CONFIRM = 'CONFIRM',
        CANCEL = 'CANCEL',
    }


}
