/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type FunctionModelDto = {
    /**
     * 功能 id
     */
    id: string;
    /**
     * 用户池 id
     */
    userPoolId: string;
    /**
     * 功能名称
     */
    name: string;
    /**
     * 功能描述
     */
    description: string;
    /**
     * 数据类型：
     * - list: 列表类型数据。
     * - tree: 树状结构数据。
     *
     */
    dataType: FunctionModelDto.dataType;
    /**
     * 功能是否启用:
     * - true: 启用
     * - false: 不启用
     *
     */
    enable: boolean;
    /**
     * 父级菜单
     */
    parentKey: string;
    /**
     * 创建时间
     */
    createdAt: string;
    /**
     * 更新时间
     */
    updatedAt: string;
    /**
     * 功能类型：
     * - user: 用户
     * - post: 岗位
     * - group: 用户组
     * - ueba: ueba
     * - department: 树状结构数据
     * - organization: 组织
     * - device: 设备
     * - device_rely: 设备
     * - custom: 自定义
     *
     */
    type: FunctionModelDto.type;
    /**
     * 字段排序
     */
    fieldOrder: string;
    /**
     * 详情页配置
     */
    config: any;
};

export namespace FunctionModelDto {

    /**
     * 数据类型：
     * - list: 列表类型数据。
     * - tree: 树状结构数据。
     *
     */
    export enum dataType {
        LIST = 'list',
        TREE = 'tree',
    }

    /**
     * 功能类型：
     * - user: 用户
     * - post: 岗位
     * - group: 用户组
     * - ueba: ueba
     * - department: 树状结构数据
     * - organization: 组织
     * - device: 设备
     * - device_rely: 设备
     * - custom: 自定义
     *
     */
    export enum type {
        UEBA = 'ueba',
        USER = 'user',
        POST = 'post',
        GROUP = 'group',
        DEPARTMENT = 'department',
        ORGANIZATION = 'organization',
        DEVICE = 'device',
        DEVICE_RELY = 'device_rely',
        CUSTOM = 'custom',
    }


}
