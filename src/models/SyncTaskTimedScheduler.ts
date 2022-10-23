/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SyncTaskTimedScheduler = {
    /**
     * 定时周期：
     * - `month`: 每个月执行一次
     * - `week`: 每周执行一次
     * - `days`: 每天执行一次
     * - `sixHours`: 每六小时执行一次
     * - `twoHours`: 每两小时执行一次
     *
     */
    cycle: SyncTaskTimedScheduler.cycle;
    /**
     * 开始时间
     */
    startTime: number;
};

export namespace SyncTaskTimedScheduler {

    /**
     * 定时周期：
     * - `month`: 每个月执行一次
     * - `week`: 每周执行一次
     * - `days`: 每天执行一次
     * - `sixHours`: 每六小时执行一次
     * - `twoHours`: 每两小时执行一次
     *
     */
    export enum cycle {
        MONTH = 'month',
        WEEK = 'week',
        DAYS = 'days',
        SIX_HOURS = 'sixHours',
        TWO_HOURS = 'twoHours',
    }


}
