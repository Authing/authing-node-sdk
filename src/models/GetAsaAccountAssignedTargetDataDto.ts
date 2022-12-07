/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AsaAccountTargetDto } from './AsaAccountTargetDto';

export type GetAsaAccountAssignedTargetDataDto = {
    /**
     * 总数
     */
    totalCount: number;
    /**
     * 主体列表
     */
    list: Array<AsaAccountTargetDto>;
};
