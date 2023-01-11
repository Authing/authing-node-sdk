/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TreeStructs = {
    /**
     * 树资源节点 Code, 同层级唯一
     */
    code: string;
    /**
     * 树资源节点名称 ，同层级唯一
     */
    name: string;
    /**
     * 树资源节点 Value
     */
    value?: string;
    /**
     * 树数据资源策略节点 actions
     */
    actions?: Array<string>;
    /**
     * 子节点数据,子节点数据最多五个层级
     */
    children?: Array<TreeStructs>;
};
