/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateArrayDataResourceDto = {
    /**
     * 数据资源权限操作列表
     */
    actions: Array<string>;
    /**
     * 数组数据资源节点
     */
    struct: Array<string>;
    /**
     * 数据资源 Code, 权限空间内唯一
     */
    resourceCode: string;
    /**
     * 数据资源名称, 权限空间内唯一
     */
    resourceName: string;
    /**
     * 数据策略所在的权限空间 Code
     */
    namespaceCode: string;
    /**
     * 数据资源描述
     */
    description?: string;
};
