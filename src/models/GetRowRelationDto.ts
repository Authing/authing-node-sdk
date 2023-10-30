/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取行关联数据
 */
export type GetRowRelationDto = {
    /**
     * 功能 id
     */
    modelId?: any;
    /**
     * 字段 id
     */
    fieldId?: any;
    /**
     * 行 id
     */
    rowId?: any;
    /**
     * 当前页数，从 1 开始
     */
    page?: any;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: any;
};
