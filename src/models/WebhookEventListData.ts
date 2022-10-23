/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WebhookCategoryDto } from './WebhookCategoryDto';
import type { WebhookEventDto } from './WebhookEventDto';

export type WebhookEventListData = {
    /**
     * 分类列表
     */
    categories: Array<WebhookCategoryDto>;
    /**
     * 事件列表
     */
    events: Array<WebhookEventDto>;
};
