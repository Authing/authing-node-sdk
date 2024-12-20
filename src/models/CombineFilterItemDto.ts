/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CombineFilterItemDto = {
    /**
     * Filter key
     */
    type: string;
    /**
     * Conditional operator
     */
    operator: CombineFilterItemDto.operator;
    /**
     * Condition value
     */
    value: (string | number);
};

export namespace CombineFilterItemDto {

    /**
     * Conditional operator
     */
    export enum operator {
        EQUAL = 'EQUAL',
        NOT_EQUAL = 'NOT_EQUAL',
        CONTAINS = 'CONTAINS',
        NOT_CONTAINS = 'NOT_CONTAINS',
        IS_NULL = 'IS_NULL',
        NOT_NULL = 'NOT_NULL',
        IN = 'IN',
        NOT_IN = 'NOT_IN',
        GREATER = 'GREATER',
        LESSER = 'LESSER',
        BETWEEN = 'BETWEEN',
    }


}
