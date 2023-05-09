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
     * 功能是否启用
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
     * 功能类型
     */
    type: FunctionModelDto.type;
    /**
     * 字段序
     */
    fieldOrder: string;
    /**
     * 详情页配置
     */
    config: any;
};

export namespace FunctionModelDto {

    /**
     * 功能类型
     */
    export enum type {
        UEBA = 'ueba',
        USER = 'user',
        POST = 'post',
        GROUP = 'group',
        DEPARTMENT = 'department',
        ORGANIZATION = 'organization',
        CUSTOM = 'custom',
    }


}
