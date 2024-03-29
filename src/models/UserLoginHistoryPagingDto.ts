/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserLoginHistoryDto } from './UserLoginHistoryDto';

export type UserLoginHistoryPagingDto = {
    /**
     * 记录总数
     */
    totalCount: number;
    /**
     * 响应数据
     */
    list: Array<UserLoginHistoryDto>;
};
