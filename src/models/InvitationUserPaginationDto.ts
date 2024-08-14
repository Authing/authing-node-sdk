/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InvitationUserDto } from './InvitationUserDto';

export type InvitationUserPaginationDto = {
    /**
     * 记录总数
     */
    totalCount?: number;
    /**
     * 列表数据
     */
    list: Array<InvitationUserDto>;
};
