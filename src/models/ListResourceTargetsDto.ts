/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ListResourceTargetsDto = {
    /**
     * 数据策略所属的数据资源路径列表
     */
    resources: Array<string>;
    /**
     * 数据资源权限操作列表
     */
    actions: Array<string>;
    /**
     * 权限空间 Code
     */
    namespaceCode: string;
};
