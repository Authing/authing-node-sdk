/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DataResourceTreeStructs = {
    /**
     * 数据资源节点 Code, 同层级唯一
     */
    code: string;
    /**
     * 数据资源节点名称 ，同层级唯一
     */
    name: string;
    /**
     * 数据资源节点 Value
     */
    value?: string;
    /**
     * 数据资源节点的子节点,子节点层级最多支持五个层级
     */
    children?: Array<DataResourceTreeStructs>;
};
