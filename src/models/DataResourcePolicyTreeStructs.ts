/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DataResourcePolicyTreeStructs = {
    /**
     * 数据资源策略节点 Code, 同层级唯一
     */
    code: string;
    /**
     * 数据资源策略节点 Value
     */
    value?: string;
    /**
     * 数据资源节点名称 ，同层级唯一
     */
    name: string;
    /**
     * 数据资源策略节点 action 动作
     */
    action: string;
    /**
     * 数据资源策略节点是否开启动作
     */
    enabled: boolean;
    /**
     * 子节点数据,子节点数据最多五个层级
     */
    children?: Array<string>;
};
