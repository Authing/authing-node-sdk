/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthorizedResourceDto } from './AuthorizedResourceDto';

export type AuthorizedResourcePagingDto = {
    /**
     * 记录总数
     */
    totalCount: number;
    /**
     * 响应数据
     */
    list: Array<AuthorizedResourceDto>;
};
