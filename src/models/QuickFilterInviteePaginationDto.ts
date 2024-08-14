/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { QuickFilterInviteeRecordDto } from './QuickFilterInviteeRecordDto';

export type QuickFilterInviteePaginationDto = {
    /**
     * 记录总数
     */
    totalCount?: number;
    /**
     * 列表数据
     */
    list: Array<QuickFilterInviteeRecordDto>;
};
