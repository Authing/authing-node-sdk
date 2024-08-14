/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取树类型资源的扩展字段列表
 */
export type ListDnefDto = {
    /**
     * 数据资源所属的权限空间 Code
     */
    namespaceCode?: any;
    /**
     * 数据资源 Code, 权限空间内唯一
     */
    resourceCode?: any;
    /**
     * 起始索引，默认为 1，即从第 1 条开始
     */
    startIndex?: any;
    /**
     * 单次查询最大条数，最大不能超过 50，默认为 10
     */
    maxSize?: any;
    /**
     * 关键字搜索，可以是字段唯一标识、展示名称
     */
    query?: any;
};
