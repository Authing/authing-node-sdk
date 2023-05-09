/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Condition } from './Condition';
import type { ScopeDto } from './ScopeDto';

export type FilterDto = {
    /**
     * 功能 id
     */
    modelId: string;
    /**
     * 关键字
     */
    keywords: string;
    /**
     * 连词
     */
    conjunction: string;
    /**
     * 搜索条件
     */
    conditions: Condition;
    /**
     * 当前页数，从 1 开始
     */
    page?: number;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: number;
    /**
     * 返回结果中是否使用字段 id 作为 key
     */
    showFieldId: boolean;
    /**
     * 返回结果中是包含关联数据的预览（前三个）
     */
    previewRelation: boolean;
    /**
     * 限定检索范围为被某个功能关联的部分
     */
    scope: ScopeDto;
};
