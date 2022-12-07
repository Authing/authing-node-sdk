/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeleteResourcesBatchDto = {
    /**
     * 所属权限分组(权限空间)的 Code
     */
    namespace?: string;
    /**
     * 资源 Code 列表
     */
    codeList?: Array<string>;
    /**
     * 资源 Id 列表
     */
    ids?: Array<string>;
};
