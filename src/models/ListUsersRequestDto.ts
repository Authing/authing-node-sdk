/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ListUsersAdvancedFilterItemDto } from './ListUsersAdvancedFilterItemDto';
import type { ListUsersOptionsDto } from './ListUsersOptionsDto';

export type ListUsersRequestDto = {
    /**
     * 模糊搜索关键字
     */
    query?: string;
    /**
     * 高级搜索
     */
    advancedFilter?: Array<ListUsersAdvancedFilterItemDto>;
    /**
     * 可选项
     */
    options?: ListUsersOptionsDto;
};
