/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WebhookDto } from './WebhookDto';

export type GetWebhooksData = {
    /**
     *Total number of records
     */
    totalCount: number;
    /**
     * Return to list
     */
    list: Array<WebhookDto>;
};
