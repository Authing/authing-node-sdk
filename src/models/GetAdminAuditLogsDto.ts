/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ListWebhooksDto } from './ListWebhooksDto';

export type GetAdminAuditLogsDto = {
    /**
     * Request ID
     */
    requestId?: string;
    /**
     * Client IP
     */
    clientIp?: string;
    /**
     * Operation type, such as create, update, delete, login, etc.
     */
    operationType?: string;
    /**
     * Resource type, such as DATA, API, BUTTON, etc.
     */
    resourceType?: string;
    /**
     * Administrator user ID
     */
    userId?: string;
    /**
     * Whether the request is successful
     */
    success?: boolean;
    /**
     * Start timestamp
     */
    start?: number;
    /**
     * End timestamp
     */
    end?: number;
    /**
     * Pagination
     */
    pagination?: ListWebhooksDto;
};
