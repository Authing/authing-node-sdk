/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateRowDto = {
    /**
     * 数据内容
     */
    data: any;
    /**
     * 功能 id
     */
    modelId: string;
    /**
     * 自定义行 id，默认自动生成。最长只允许 32 位。
     */
    rowId?: string;
};
