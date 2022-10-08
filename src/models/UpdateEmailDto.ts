/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateEmailDto = {
    /**
     * 用于临时修改邮箱的 token，可从**发起修改邮箱的验证请求**接口获取。
     */
    updateEmailToken: string;
};
