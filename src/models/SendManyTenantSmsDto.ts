/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SendTenantSmsDto } from './SendTenantSmsDto';

export type SendManyTenantSmsDto = {
    /**
     * 管理员名
     */
    adminName: string;
    /**
     * 导入 id
     */
    importId: number;
    /**
     * 需要短信通知的管理员
     */
    users: Array<SendTenantSmsDto>;
};
