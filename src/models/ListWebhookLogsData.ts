/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WebhookLogDto } from './WebhookLogDto';

export type ListWebhookLogsData = {
    /**
     * 记录总数
     */
    totalCount: number;
    /**
     * 返回列表
     */
    list: Array<WebhookLogDto>;
};
