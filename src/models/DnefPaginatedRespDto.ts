/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExtendField } from './ExtendField';

export type DnefPaginatedRespDto = {
    /**
     * 下一页开始的索引，当最后一页时返回 -1
     */
    nextStartIndex: number;
    /**
     * 是否被截断，true 表示可以查询下一页，false 表示是最后一页数据
     */
    truncated: boolean;
    /**
     * 响应数据
     */
    list: Array<ExtendField>;
};
