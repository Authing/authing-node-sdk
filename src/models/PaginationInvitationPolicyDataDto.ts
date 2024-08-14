/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetInvitationPolicyDto } from './GetInvitationPolicyDto';

export type PaginationInvitationPolicyDataDto = {
    /**
     * 记录总数
     */
    totalCount: number;
    /**
     * 响应数据
     */
    list: Array<GetInvitationPolicyDto>;
};
