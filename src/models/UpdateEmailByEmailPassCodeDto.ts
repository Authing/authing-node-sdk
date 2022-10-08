/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateEmailByEmailPassCodeDto = {
    /**
     * 新邮箱
     */
    newEmail: string;
    /**
     * 新邮箱验证码
     */
    newEmailPassCode: string;
    /**
     * 旧邮箱，如果用户池开启了修改邮箱需要验证之前的邮箱，此参数必填。
     */
    oldEmail?: string;
    /**
     * 旧邮箱验证码，如果用户池开启了修改邮箱需要验证之前的邮箱，此参数必填。
     */
    oldEmailPassCode?: string;
};
