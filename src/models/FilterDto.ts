/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Condition } from './Condition';
import type { Expand } from './Expand';
import type { ScopeDto } from './ScopeDto';

export type FilterDto = {
    /**
     * 功能 id
     */
    modelId: string;
    /**
     * 关键字
     */
    keywords?: string;
    /**
     * 多个搜索条件的关系：
     * - and: 且
     * - or:  或
     *
     */
    conjunction?: string;
    /**
     * 搜索条件
     */
    conditions?: Array<Condition>;
    /**
     * 排序条件
     */
    sort?: Array<any>;
    /**
     * 当前页数，从 1 开始
     */
    page?: number;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: number;
    /**
     * 是否不分页返回所有（仅支持树形结构获取子节点的场景）
     */
    fetchAll?: boolean;
    /**
     * 是否返回节点的全路径（仅支持树形结构）
     */
    withPath?: boolean;
    /**
     * 返回结果中是否使用字段 id 作为 key
     */
    showFieldId?: boolean;
    /**
     * 返回结果中是包含关联数据的预览（前三个）
     */
    previewRelation?: boolean;
    /**
     * 是否返回关联数据的详细用户信息，当前只支持用户。
     */
    getRelationFieldDetail?: boolean;
    /**
     * 限定检索范围为被某个功能关联的部分
     */
    scope?: ScopeDto;
    /**
     * 过滤指定关联数据
     */
    filterRelation?: ScopeDto;
    /**
     * 获取对应关联数据的详细字段
     */
    expand?: Array<Expand>;
};
