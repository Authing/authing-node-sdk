/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WebhookRetryConfigV3Dto = {
    /**
     * 是否开启失败重试
     */
    enabled: boolean;
    /**
     * 失败重试次数
     */
    count?: number;
    /**
     * 失败重试时间间隔
     */
    delay?: number;
    /**
     * 失败重试时间间隔单位
     */
    delayUnit?: WebhookRetryConfigV3Dto.delayUnit;
};

export namespace WebhookRetryConfigV3Dto {

    /**
     * 失败重试时间间隔单位
     */
    export enum delayUnit {
        SECOND = 'Second',
        MINUTE = 'Minute',
        HOUR = 'Hour',
        DAY = 'Day',
    }


}
