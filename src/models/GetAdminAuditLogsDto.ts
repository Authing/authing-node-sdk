/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ListWebhooksDto } from './ListWebhooksDto';

export type GetAdminAuditLogsDto = {
    /**
     * 请求 ID
     */
    requestId?: string;
    /**
     * 客户端 IP
     */
    clientIp?: string;
    /**
     * 操作类型，例如 create、update、delete、login 等
     */
    operationType?: string;
    /**
     * 资源类型，例如 DATA、API、BUTTON 等
     */
    resourceType?: string;
    /**
     * 管理员用户 ID
     */
    userId?: string;
    /**
     * 请求是否成功
     */
    success?: boolean;
    /**
     * 开始时间戳
     */
    start?: number;
    /**
     * 结束时间戳
     */
    end?: number;
    /**
     * 分页
     */
    pagination?: ListWebhooksDto;
};
