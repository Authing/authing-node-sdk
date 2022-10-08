/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BindEmailDto = {
    /**
     * 邮箱验证码，一个邮箱验证码只能使用一次，且有一定有效时间。
     */
    passCode: string;
    /**
     * 邮箱，不区分大小写。
     */
    email: string;
};
