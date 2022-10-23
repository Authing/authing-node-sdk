/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AdminAuditLogDto } from './AdminAuditLogDto';

export type AdminAuditLogRespData = {
    /**
     * 记录总数
     */
    totalCount: number;
    /**
     * 返回列表
     */
    list: Array<AdminAuditLogDto>;
};
