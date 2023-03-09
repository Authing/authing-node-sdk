/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BindByEmailCodeInputApi = {
    /**
     * 中间态键
     */
    key: string;
    /**
     * 操作编码
     */
    action: string;
    /**
     * 邮箱验证码（四位：1234；六位：123456）
     */
    code: string;
    /**
     * 邮箱
     */
    email: string;
};
