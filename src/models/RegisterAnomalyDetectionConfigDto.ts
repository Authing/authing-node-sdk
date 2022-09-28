/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RegisterAnomalyDetectionConfigDto = {
    /**
     * 是否开启频繁注册限制
     */
    enabled: boolean;
    /**
     * 在一定时间周期内，对于同一个 IP，最多只能注册多少次。
     */
    limit: number;
    /**
     * 限定周期时间长度，单位为秒。
     */
    timeInterval: number;
};
