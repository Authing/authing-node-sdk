/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PublicAccountDto } from './PublicAccountDto';

export type PublicAccountPagingDto = {
    /**
     * 记录总数
     */
    totalCount: number;
    /**
     * 数据列表
     */
    list: Array<PublicAccountDto>;
};
