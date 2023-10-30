/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ListPermissionViewRespDto } from './ListPermissionViewRespDto';

export type ListPermissionViewPaginatedRespDto = {
    /**
     * 记录总数
     */
    totalCount: number;
    /**
     * 响应数据
     */
    list: Array<ListPermissionViewRespDto>;
};
