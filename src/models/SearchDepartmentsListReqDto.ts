/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SearchDepartmentsFilterItemDto } from './SearchDepartmentsFilterItemDto';

export type SearchDepartmentsListReqDto = {
    /**
     * 组织 code
     */
    organizationCode: string;
    /**
     * 是否获取自定义数据
     */
    withCustomData?: boolean;
    /**
     * 当前页数，从 1 开始
     */
    page?: number;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: number;
    /**
     * 高级搜索
     */
    advancedFilter?: Array<SearchDepartmentsFilterItemDto>;
    /**
     * 排序依据，如 更新时间或创建时间
     */
    sortBy?: SearchDepartmentsListReqDto.sortBy;
    /**
     * 增序或降序
     */
    orderBy?: SearchDepartmentsListReqDto.orderBy;
};

export namespace SearchDepartmentsListReqDto {

    /**
     * 排序依据，如 更新时间或创建时间
     */
    export enum sortBy {
        UPDATED_AT = 'updatedAt',
        CREATED_AT = 'createdAt',
    }

    /**
     * 增序或降序
     */
    export enum orderBy {
        ASC = 'ASC',
        DESC = 'DESC',
    }


}
