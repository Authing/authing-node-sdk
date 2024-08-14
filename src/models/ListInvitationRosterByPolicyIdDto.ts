/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CombineFiltersBaseDto } from './CombineFiltersBaseDto';

export type ListInvitationRosterByPolicyIdDto = {
    /**
     * 策略 ID。
     */
    policyId: string;
    /**
     * 当前页数，从 1 开始
     */
    page?: number;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: number;
    /**
     * 用于根据名单的名称或 ID 进行模糊搜索，可选。
     */
    keywords?: string;
    /**
     * 高级筛选条件
     */
    filter?: CombineFiltersBaseDto;
    /**
     * 是否返回创建者详情
     */
    withCreatorDetail?: boolean;
    /**
     * 是否返回名单关联的用户数量，可选。
     */
    withUserCount?: boolean;
    /**
     * 是否返回名单关联的策略，可选。
     */
    withAssignedPolicy?: boolean;
};
