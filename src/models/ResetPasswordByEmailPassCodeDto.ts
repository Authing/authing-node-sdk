/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ResetPasswordByEmailPassCodeDto = {
    /**
     * 此账号绑定的邮箱，不区分大小写。
     */
    email?: string;
    /**
     * 邮箱验证码，一个短信验证码只能使用一次，默认有效时间为 5 分钟。你需要通过**发送邮件**接口获取。
     */
    passCode: string;
};
