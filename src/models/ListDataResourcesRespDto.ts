/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ListDataResourcesRespDto = {
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
    type: ListDataResourcesRespDto.type;
    /**
     * 数据资源描述
     */
    description?: string;
    /**
     * 数据资源所属的权限空间 Code
     */
    namespaceCode: string;
    /**
     * 数据资源所属的权限空间名称
     */
    namespaceName: string;
    /**
     * 数据资源关联授权的数量
     */
    authorizationNum: number;
    /**
     * 数据资源更新时间
     */
    updatedAt: string;
};

export namespace ListDataResourcesRespDto {

    /**
     * 数据资源类型，目前支持树结构（TREE）、字符串（STRING）、数组（ARRAY）
     */
    export enum type {
        TREE = 'TREE',
        STRING = 'STRING',
        ARRAY = 'ARRAY',
    }


}
