/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateStringDataResourceRespDto = {
    /**
     * 数据资源名称, 权限空间内唯一
     */
    resourceName: string;
    /**
     * 数据资源 Code, 权限空间内唯一
     */
    resourceCode: string;
    /**
     * 数据资源类型，目前支持树结构（TREE）、字符串（STRING）、数组（ARRAY）
     */
    type: CreateStringDataResourceRespDto.type;
    /**
     * 数据资源描述
     */
    description?: string;
    /**
     * 字符串数据资源节点
     */
    struct: string;
    /**
     * 数据资源权限操作列表
     */
    actions: Array<string>;
};

export namespace CreateStringDataResourceRespDto {

    /**
     * 数据资源类型，目前支持树结构（TREE）、字符串（STRING）、数组（ARRAY）
     */
    export enum type {
        TREE = 'TREE',
        STRING = 'STRING',
        ARRAY = 'ARRAY',
    }


}
