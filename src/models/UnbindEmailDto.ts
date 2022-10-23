/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UnbindEmailDto = {
    /**
     * 邮箱验证码，需要先调用**发送邮件**接口接收验证码。
     */
    passCode: string;
};
