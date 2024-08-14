/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CopyRowRelationDto = {
    /**
     * 复制后关联的行 id
     */
    relationRowId: string;
    /**
     * 被复制的行 id
     */
    rowId: string;
    /**
     * 功能 id
     */
    modelId: string;
};
