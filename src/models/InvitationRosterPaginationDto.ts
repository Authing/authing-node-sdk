/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InvitationRosterDto } from './InvitationRosterDto';

export type InvitationRosterPaginationDto = {
    /**
     * 记录总数
     */
    totalCount?: number;
    /**
     * 列表数据
     */
    list: Array<InvitationRosterDto>;
};
