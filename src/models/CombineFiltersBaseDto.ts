/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CombineFilterItemDto } from './CombineFilterItemDto';

export type CombineFiltersBaseDto = {
    /**
     * Condition combination method
     */
    type: CombineFiltersBaseDto.type;
    /**
     * Filter conditions
     */
    filters: Array<CombineFilterItemDto>;
};

export namespace CombineFiltersBaseDto {

    /**
     * Condition combination method
     */
    export enum type {
        AND = 'and',
        OR = 'or',
    }


}
