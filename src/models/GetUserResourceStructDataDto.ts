/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ArrResourceAuthAction } from './ArrResourceAuthAction';
import type { StrResourceAuthAction } from './StrResourceAuthAction';
import type { TreeResourceAuthAction } from './TreeResourceAuthAction';

export type GetUserResourceStructDataDto = {
    /**
     * 权限空间 Code
     */
    namespaceCode: string;
    /**
     * 数据资源 Code
     */
    resourceCode: string;
    /**
     * 数据资源类型，目前支持树结构（TREE）、字符串（STRING）、数组（ARRAY）三种类型，根据不同的类型返回不同的结构。
     * - `STRING`: 字符串类型结果 StrResourceAuthAction
     * - `ARRAY`: 数组类型 ArrResourceAuthAction
     * - `TREE`: 树类型 TreeResourceAuthAction
     */
    resourceType: GetUserResourceStructDataDto.resourceType;
    /**
     * 字符串资源授权
     */
    strResourceAuthAction?: StrResourceAuthAction;
    /**
     * 数组资源授权
     */
    arrResourceAuthAction?: ArrResourceAuthAction;
    /**
     * 树资源授权
     */
    treeResourceAuthAction?: TreeResourceAuthAction;
};

export namespace GetUserResourceStructDataDto {

    /**
     * 数据资源类型，目前支持树结构（TREE）、字符串（STRING）、数组（ARRAY）三种类型，根据不同的类型返回不同的结构。
     * - `STRING`: 字符串类型结果 StrResourceAuthAction
     * - `ARRAY`: 数组类型 ArrResourceAuthAction
     * - `TREE`: 树类型 TreeResourceAuthAction
     */
    export enum resourceType {
        TREE = 'TREE',
        STRING = 'STRING',
        ARRAY = 'ARRAY',
    }


}
