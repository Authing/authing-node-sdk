/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 按照推送码使用顺序，共分为已推送、等待用户 同意/取消 授权、推送码过期以及未知错误五种状态，前端应该通过不同的状态给到用户不同的反馈。
 */
export type CheckPushcodeStatusDto = {
    /**
     * 推送码（推送登录唯一 ID）
     */
    pushCodeId?: any;
};
