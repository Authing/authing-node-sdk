/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GenePushCodeDataDto = {
    /**
     * 推送码（推送登录唯一 ID），可以通过此唯一 ID 查询推送码状态。
     */
    pushCodeId: string;
    /**
     * 推送码 `${expireTime}` 秒后过期，如 120 秒后过期。
     */
    expireTime: number;
};
