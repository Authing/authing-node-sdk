/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ChangeQRCodeStatusDto = {
    /**
     * 修改二维码状态的动作:
     * - `SCAN`: 修改二维码状态为已扫码状态，当移动 APP 扫了码之后，应当立即执行此操作；
     * - `CONFIRM`: 修改二维码状态为已授权，执行此操作前必须先执行 `SCAN 操作；
     * - `CANCEL`: 修改二维码状态为已取消，执行此操作前必须先执行 `SCAN 操作；
     *
     */
    action: ChangeQRCodeStatusDto.action;
    /**
     * 二维码唯一 ID
     */
    qrcodeId: string;
};

export namespace ChangeQRCodeStatusDto {

    /**
     * 修改二维码状态的动作:
     * - `SCAN`: 修改二维码状态为已扫码状态，当移动 APP 扫了码之后，应当立即执行此操作；
     * - `CONFIRM`: 修改二维码状态为已授权，执行此操作前必须先执行 `SCAN 操作；
     * - `CANCEL`: 修改二维码状态为已取消，执行此操作前必须先执行 `SCAN 操作；
     *
     */
    export enum action {
        SCAN = 'SCAN',
        CONFIRM = 'CONFIRM',
        CANCEL = 'CANCEL',
    }


}
