/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LoginPassowrdFailCheckConfigDto = {
    /**
     * 是否开启登录失败次数限制。
     */
    enabled: boolean;
    /**
     * 在一定时间周期内，对于同一个 IP，最多因为密码错误导致登录失败多少次后会触发安全策略。
     */
    limit: number;
    /**
     * 限定周期时间长度，单位为秒。
     */
    timeInterval: number;
};
