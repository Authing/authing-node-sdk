/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RemoveRowDto = {
    /**
     * 行 id
     */
    rowIdList: Array<string>;
    /**
     * 功能 id
     */
    modelId: string;
    /**
     * 如果当前行有子节点，是否递归删除，默认为 false。当为 false 时，如果有子节点，会提示错误。
     */
    recursive?: boolean;
};
