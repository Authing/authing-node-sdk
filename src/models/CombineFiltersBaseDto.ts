/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CombineFilterItemDto } from './CombineFilterItemDto';

export type CombineFiltersBaseDto = {
    /**
     * 条件组合方式
     */
    type: CombineFiltersBaseDto.type;
    /**
     * 筛选条件
     */
    filters: Array<CombineFilterItemDto>;
};

export namespace CombineFiltersBaseDto {

    /**
     * 条件组合方式
     */
    export enum type {
        AND = 'and',
        OR = 'or',
    }


}
