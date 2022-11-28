/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LoginFailCheckConfigDto = {
    /**
     * 是否开启登录失败次数限制。
     */
    enabled: boolean;
    /**
     * 在一定时间周期内，对于同一个 IP，最多登录失败多少次后会触发安全策略。
     */
    limit: number;
    /**
     * 限定周期时间长度，单位为秒。
     */
    timeInterval: number;
    /**
     * 时间长度单位。Second/Minute/Hour/Day，仅仅做显示，timeInterval的单位还是秒
     */
    unit?: string;
};
