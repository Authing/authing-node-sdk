/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResourceAuthorizedTargetDto } from './ResourceAuthorizedTargetDto';

export type GetResourceAuthorizedTargetDataDto = {
    /**
     * 总数
     */
    totalCount: number;
    /**
     * 元素列表
     */
    list: Array<ResourceAuthorizedTargetDto>;
};
