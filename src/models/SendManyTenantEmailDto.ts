/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SendTenantEmailDto } from './SendTenantEmailDto';

export type SendManyTenantEmailDto = {
    /**
     * 管理员名
     */
    adminName: string;
    /**
     * 导入 id
     */
    importId: number;
    /**
     * 需要邮件通知的管理员
     */
    users: Array<SendTenantEmailDto>;
};
