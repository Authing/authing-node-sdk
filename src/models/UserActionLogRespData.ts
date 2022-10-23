/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserActionLogDto } from './UserActionLogDto';

export type UserActionLogRespData = {
    /**
     * 记录总数
     */
    totalCount: number;
    /**
     * 返回列表
     */
    list: Array<UserActionLogDto>;
};
