/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ListPublicAccountsAdvancedFilterItemDto } from './ListPublicAccountsAdvancedFilterItemDto';
import type { ListPublicAccountsOptionsDto } from './ListPublicAccountsOptionsDto';

export type ListPublicAccountsRequestDto = {
    /**
     * 模糊搜索关键字
     */
    keywords?: string;
    /**
     * 高级搜索
     */
    advancedFilter?: Array<ListPublicAccountsAdvancedFilterItemDto>;
    /**
     * 使用 ES 查询语句执行搜索命令
     */
    searchQuery?: any;
    /**
     * 可选项
     */
    options?: ListPublicAccountsOptionsDto;
};
