/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ChangeQRCodeStatusDto = {
    /**
     * QR code unique ID
     */
    qrcodeId: string;
    /**
     * Action to modify QR code status:
     * - `SCAN`: Change the QR code status to scanned status. This operation should be performed immediately after the mobile APP scans the code;
     * - `CONFIRM`: Modify the QR code status to authorized. The `SCAN operation must be performed before performing this operation;
     * - `CANCEL`: Modify the QR code status to canceled. The `SCAN operation must be performed before performing this operation;
     *
     */
    action: ChangeQRCodeStatusDto.action;
};

export namespace ChangeQRCodeStatusDto {

    /**
     * Action to modify QR code status:
     * - `SCAN`: Change the QR code status to scanned status. This operation should be performed immediately after the mobile APP scans the code;
     * - `CONFIRM`: Modify the QR code status to authorized. The `SCAN operation must be performed before performing this operation;
     * - `CANCEL`: Modify the QR code status to canceled. The `SCAN operation must be performed before performing this operation;
     *
     */
    export enum action {
        SCAN = 'SCAN',
        CONFIRM = 'CONFIRM',
        CANCEL = 'CANCEL',
    }


}
