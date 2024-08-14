/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TreeAuthBo = {
    /**
     * 树资源节点路径
     */
    nodePath: string;
    /**
     * 树资源节点名称
     */
    nodeName: string;
    /**
     * 树资源节点操作权限列表
     */
    nodeActions: Array<string>;
    /**
     * 树资源节点 Value
     */
    nodeValue?: string;
    /**
     * 树资源节点扩展字段值
     */
    nodeExtendFieldValue?: any;
};
