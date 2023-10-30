/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RemoveRelationValueDto = {
    /**
     * 关联数据
     */
    value: string;
    /**
     * 字段 id
     */
    fieldIds: Array<string>;
    /**
     * 行 id
     */
    rowId: string;
    /**
     * 功能 id
     */
    modelId: string;
};
