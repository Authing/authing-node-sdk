/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InviteTenantUserRecord } from './InviteTenantUserRecord';

export type InviteTenantUserRecordListDto = {
    /**
     * 记录总数
     */
    totalCount: number;
    /**
     * 邀请用户历史记录
     */
    list: Array<InviteTenantUserRecord>;
};
