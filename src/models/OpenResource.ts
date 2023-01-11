/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ArrayAuthorize } from './ArrayAuthorize';
import type { StrAuthorize } from './StrAuthorize';
import type { TreeAuthorize } from './TreeAuthorize';

export type OpenResource = {
    /**
     * 数据策略下所授权的数据资源 Code
     */
    resourceCode: string;
    /**
     * 数据策略下所授权的数据资源类型，目前支持树结构（TREE）、字符串（STRING）、数组（ARRAY）三种类型，根据不同的类型返回不同的结构。
     * - `STRING`: 字符串类型结果 StrAuthorize
     * - `ARRAY`: 数组类型 ArrayAuthorize
     * - `TREE`: 树类型 TreeAuthorize
     */
    resourceType: OpenResource.resourceType;
    /**
     * 数据策略的字符串资源
     */
    strAuthorize?: StrAuthorize;
    /**
     * 数据策略的数组资源
     */
    arrAuthorize?: ArrayAuthorize;
    /**
     * 数据策略的树资源
     */
    treeAuthorize?: TreeAuthorize;
};

export namespace OpenResource {

    /**
     * 数据策略下所授权的数据资源类型，目前支持树结构（TREE）、字符串（STRING）、数组（ARRAY）三种类型，根据不同的类型返回不同的结构。
     * - `STRING`: 字符串类型结果 StrAuthorize
     * - `ARRAY`: 数组类型 ArrayAuthorize
     * - `TREE`: 树类型 TreeAuthorize
     */
    export enum resourceType {
        TREE = 'TREE',
        STRING = 'STRING',
        ARRAY = 'ARRAY',
    }


}
