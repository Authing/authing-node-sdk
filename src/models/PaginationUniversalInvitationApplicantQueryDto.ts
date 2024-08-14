/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CombineFiltersBaseDto } from './CombineFiltersBaseDto';

export type PaginationUniversalInvitationApplicantQueryDto = {
    /**
     * 当前页数，从 1 开始
     */
    page?: number;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: number;
    /**
     * 用于根据申请人名称、手机号或邮箱进行模糊搜索，可选。
     */
    keywords?: string;
    /**
     * 复杂筛选条件
     */
    filter?: CombineFiltersBaseDto;
    /**
     * 是否返回邀请人详情
     */
    withInvitorDetail?: boolean;
    /**
     * 是否返回审批人详情
     */
    withOperatorDetail?: boolean;
};
