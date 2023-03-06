/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PostItemDto } from './PostItemDto';

export type PostPagingDto = {
    /**
     * 记录总数
     */
    totalCount: number;
    /**
     * 响应数据
     */
    list: Array<PostItemDto>;
};
