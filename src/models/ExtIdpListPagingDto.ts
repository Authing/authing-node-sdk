/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExtIdpDto } from './ExtIdpDto';

export type ExtIdpListPagingDto = {
    /**
     * 记录总数
     */
    totalCount: number;
    /**
     * 响应数据
     */
    list: Array<ExtIdpDto>;
};
