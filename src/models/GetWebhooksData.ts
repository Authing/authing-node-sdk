/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WebhookDto } from './WebhookDto';

export type GetWebhooksData = {
    /**
     * 记录总数
     */
    totalCount: number;
    /**
     * 返回列表
     */
    list: Array<WebhookDto>;
};
