/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ApprovalUser = {
    /**
     * Authing 用户 ID
     */
    userId: string;
    /**
     * 用户头像地址
     */
    photo: string;
    /**
     * 用户展示名称，按以下顺序取第一个不为空参数：邮箱、手机号、名称、昵称、姓名、姓氏、用户名、用户 ID
     */
    userName: string;
};
