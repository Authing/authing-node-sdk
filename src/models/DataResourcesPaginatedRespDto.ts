/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ListDataResourcesRespDto } from './ListDataResourcesRespDto';

export type DataResourcesPaginatedRespDto = {
    /**
     * 记录总数
     */
    totalCount: number;
    /**
     * 响应数据
     */
    list: Array<ListDataResourcesRespDto>;
};
