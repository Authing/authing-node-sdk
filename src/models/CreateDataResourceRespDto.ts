/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DataResourceTreeStructs } from './DataResourceTreeStructs';
import type { ExtendField } from './ExtendField';

export type CreateDataResourceRespDto = {
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
    type: CreateDataResourceRespDto.type;
    /**
     * 数据资源描述
     */
    description?: string;
    /**
     * 数据资源结构，支持字符串（STRING）、树结构（TREE）和数组结构（ARRAY）。
     */
    struct: (DataResourceTreeStructs | string | Array<string>);
    /**
     * 扩展字段列表，目前只支持树类型资源
     */
    extendFieldList?: Array<ExtendField>;
    /**
     * 数据资源权限操作列表
     */
    actions: Array<string>;
};

export namespace CreateDataResourceRespDto {

    /**
     * 数据资源类型，目前支持树结构（TREE）、字符串（STRING）、数组（ARRAY）
     */
    export enum type {
        TREE = 'TREE',
        STRING = 'STRING',
        ARRAY = 'ARRAY',
    }


}
