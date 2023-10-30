/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateRowDto = {
    /**
     * 数据内容
     */
    data: any;
    /**
     * 行 id
     */
    rowId: string;
    /**
     * 功能 id
     */
    modelId: string;
    /**
     * 响应中键是否为 FieldId
     */
    showFieldId?: boolean;
};
