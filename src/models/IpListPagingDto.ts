/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IpListRespDto } from './IpListRespDto';

export type IpListPagingDto = {
    /**
     * 记录总数
     */
    totalCount: number;
    /**
     * 数据列表
     */
    list: Array<IpListRespDto>;
};
