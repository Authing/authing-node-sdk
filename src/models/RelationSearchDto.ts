/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RelationSearchDto = {
    /**
     * 关联字段 id
     */
    fieldId: string;
    /**
     * 功能 id
     */
    modelId: string;
    /**
     * 关键字
     */
    keywords?: string;
    /**
     * 当前页数，从 1 开始
     */
    page?: number;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: number;
    /**
     * 返回结果中是否使用字段 id 作为 key
     */
    showFieldId?: boolean;
};
