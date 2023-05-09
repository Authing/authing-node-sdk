/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateRelationValueDto = {
    /**
     * 功能 id
     */
    modelId: string;
    /**
     * 字段 id
     */
    fieldId: string;
    /**
     * 行 id
     */
    rowId: string;
    /**
     * 关联数据
     */
    valueList: Array<string>;
};
