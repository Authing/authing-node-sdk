/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MauPeriodUsageHistoryDto = {
    /**
     * 周期开始时间(年月日)
     */
    periodStartTime: string;
    /**
     * 周期结束时间(年月日)
     */
    periodEndTime: string;
    /**
     * 当前周期使用的 mau 总数量
     */
    amount: string;
    /**
     * 当前周期使用的 mau 数量
     */
    current: string;
};
