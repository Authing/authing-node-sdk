/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ListWebhooksDto } from './ListWebhooksDto';

export type GetUserActionLogsDto = {
    /**
     * 请求 ID
     */
    requestId?: string;
    /**
     * 客户端 IP
     */
    clientIp?: string;
    /**
     * 事件类型，用户的一系列操作，比如 login、logout、register、verifyMfa 等
     */
    eventType?: string;
    /**
     * 用户 ID
     */
    userId?: string;
    /**
     * 应用 ID
     */
    appId?: string;
    /**
     * 开始时间戳
     */
    start?: number;
    /**
     * 结束时间戳
     */
    end?: number;
    /**
     * 请求是否成功
     */
    success?: boolean;
    /**
     * 分页
     */
    pagination?: ListWebhooksDto;
};
