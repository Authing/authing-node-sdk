/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ListWebhooksDto } from './ListWebhooksDto';

export type GetUserActionLogsDto = {
    /**
     * Request ID
     */
    requestId?: string;
    /**
     * Client IP
     */
    clientIp?: string;
    /**
     * Event type, a series of user operations, such as login, logout, register, verifyMfa, etc.
     */
    eventType?: string;
    /**
     *User ID
     */
    userId?: string;
    /**
     * Application ID
     */
    appId?: string;
    /**
     * Start timestamp
     */
    start?: number;
    /**
     * End timestamp
     */
    end?: number;
    /**
     * Whether the request is successful
     */
    success?: boolean;
    /**
     * Pagination
     */
    pagination?: ListWebhooksDto;
};
