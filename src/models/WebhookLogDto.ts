/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WebhookLogDto = {
    /**
     * Webhook ID
     */
    webhookId: string;
    /**
     * Webhook 事件名称
     */
    eventName: string;
    /**
     * Webhook 请求体
     */
    requestBody: any;
    /**
     * Webhook 请求头
     */
    requestHeaders: any;
    /**
     * Webhook 响应码
     */
    responseStatusCode: number;
    /**
     * Webhook 响应头
     */
    responseHeaders: any;
    /**
     * Webhook 响应体
     */
    responseBody: any;
    /**
     * 时间戳
     */
    timestamp: string;
    /**
     * 是否请求成功
     */
    success: boolean;
    /**
     * 请求失败时返回的错误信息
     */
    errorMessage?: string;
};
