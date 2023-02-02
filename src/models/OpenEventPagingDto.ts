/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OpenEventDto } from './OpenEventDto';

export type OpenEventPagingDto = {
    /**
     * 记录总数
     */
    totalCount: number;
    /**
     * 数据列表
     */
    list: Array<OpenEventDto>;
};
