/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CombineFilterItemDto = {
    /**
     * 筛选条件的 key
     */
    type: string;
    /**
     * 条件操作符
     */
    operator: CombineFilterItemDto.operator;
    /**
     * 条件值
     */
    value: (string | number);
};

export namespace CombineFilterItemDto {

    /**
     * 条件操作符
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
