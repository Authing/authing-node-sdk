/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PipelineFunctionDto } from './PipelineFunctionDto';

export type PipelineFunctionPagingDto = {
    /**
     * 总数
     */
    totalCount: number;
    /**
     * 数据列表
     */
    list: Array<PipelineFunctionDto>;
};
