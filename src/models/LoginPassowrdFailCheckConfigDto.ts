/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LoginPassowrdFailCheckConfigDto = {
    /**
     * 是否开启登录密码错误限制
     */
    enabled: boolean;
    /**
     * 密码错误次数最大限制
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
