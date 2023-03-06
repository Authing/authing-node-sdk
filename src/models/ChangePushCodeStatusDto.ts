/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ChangePushCodeStatusDto = {
    /**
     * 修改推送码状态的动作:
     * - `CONFIRM`: 修改推送码状态为已授权；
     * - `CANCEL`: 修改推送码状态为已取消；
     *
     */
    action: ChangePushCodeStatusDto.action;
    /**
     * 推送码（推送登录唯一 ID）
     */
    pushCodeId: string;
};

export namespace ChangePushCodeStatusDto {

    /**
     * 修改推送码状态的动作:
     * - `CONFIRM`: 修改推送码状态为已授权；
     * - `CANCEL`: 修改推送码状态为已取消；
     *
     */
    export enum action {
        CONFIRM = 'CONFIRM',
        CANCEL = 'CANCEL',
    }


}
