/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserDto } from './UserDto';

export type UserPagingDto = {
    /**
     * 记录总数
     */
    totalCount: number;
    /**
     * 数据
     */
    list: Array<UserDto>;
};
