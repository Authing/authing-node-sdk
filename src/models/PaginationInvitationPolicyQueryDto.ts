/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CombineFiltersBaseDto } from './CombineFiltersBaseDto';

export type PaginationInvitationPolicyQueryDto = {
    /**
     * 当前页数，从 1 开始
     */
    page?: number;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: number;
    /**
     * 用于根据策略的名称或 ID 进行模糊搜索，可选。
     */
    keywords?: string;
    /**
     * 复杂筛选条件
     */
    filter?: CombineFiltersBaseDto;
    /**
     * 是否返回创建者详情
     */
    withCreatorDetail?: boolean;
};
