/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SearchDepartmentsFilterItemDto = {
    /**
     * 高级搜索指定的部门字段：
     * - `updatedAt`: 更新时间，高级搜索请用时间戳
     * - `createdAt`: 创建时间，高级搜索请用时间戳
     * - `name`: 部门名称
     *
     */
    field: string;
    /**
     * 运算符，可选值为：
     * - `EQUAL`: 全等，适用于数字和字符串的全等匹配
     * - `IN`: 为某个数组中的元素
     * - `GREATER`: 大于或等于，适用于数字、日期类型数据的比较
     * - `LESSER`: 小于或等于，适用于数字、日期类型数据的比较
     * - `BETWEEN`: 介于什么什么之间，适用于数字、日期类型数据的比较
     * - `CONTAINS`: 字符串包含
     *
     */
    operator: SearchDepartmentsFilterItemDto.operator;
    /**
     * 搜索值，不同的 `field` 对应的 `value` 类型可能不一样
     */
    value?: any;
};

export namespace SearchDepartmentsFilterItemDto {

    /**
     * 运算符，可选值为：
     * - `EQUAL`: 全等，适用于数字和字符串的全等匹配
     * - `IN`: 为某个数组中的元素
     * - `GREATER`: 大于或等于，适用于数字、日期类型数据的比较
     * - `LESSER`: 小于或等于，适用于数字、日期类型数据的比较
     * - `BETWEEN`: 介于什么什么之间，适用于数字、日期类型数据的比较
     * - `CONTAINS`: 字符串包含
     *
     */
    export enum operator {
        BETWEEN = 'BETWEEN',
        EQUAL = 'EQUAL',
        IN = 'IN',
        LESSER = 'LESSER',
        GREATER = 'GREATER',
        CONTAINS = 'CONTAINS',
    }


}
