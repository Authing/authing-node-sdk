/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UpdateExtendsFieldDto } from './UpdateExtendsFieldDto';

export type PolicyExtendsFieldsDto = {
    /**
     * 字段信息
     */
    extendsField: UpdateExtendsFieldDto;
    /**
     * 操作类型
     * - `add`: 新增
     * - `update`: 更新
     * - `delete`: 删除
     * - `reorder`: 排序
     */
    action: string;
    /**
     * 策略 ID
     */
    policyId: string;
    /**
     * 字段排序
     */
    newOrder?: Array<string>;
};
