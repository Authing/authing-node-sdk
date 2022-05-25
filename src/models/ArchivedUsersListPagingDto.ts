/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ListArchivedUsersRespDto } from './ListArchivedUsersRespDto';

export type ArchivedUsersListPagingDto = {
    /**
     * 记录总数
     */
    totalCount: number;
    /**
     * 响应数据
     */
    list: Array<ListArchivedUsersRespDto>;
};
