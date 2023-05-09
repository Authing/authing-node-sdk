/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RelationOptionalRange } from './RelationOptionalRange';

export type FunctionModelFieldDto = {
    /**
     * 字段 id
     */
    id: string;
    /**
     * 功能 id
     */
    modelId: string;
    /**
     * 字段名称
     */
    name: string;
    /**
     * 字段属性名
     */
    key: string;
    /**
     * 字段类型
     */
    type: number;
    /**
     * 是否展示
     */
    show: boolean;
    /**
     * 是否可编辑
     */
    editable: boolean;
    /**
     * 帮助说明
     */
    help: string;
    /**
     * 默认值
     */
    default: string;
    /**
     * 是否必填
     */
    require: boolean;
    /**
     * 是否唯一
     */
    unique: boolean;
    /**
     * 字符串长度限制
     */
    maxLength: number;
    /**
     * 上限(数字、日期)
     */
    max: number;
    /**
     * 下限(数字、日期)
     */
    min: number;
    /**
     * 字符串规则
     */
    regexp: string;
    /**
     * 前端格式化规则
     */
    format: number;
    /**
     * 下拉菜单选项
     */
    dropDown: number;
    /**
     * 关联数据要展示的属性
     */
    relationType: string;
    /**
     * 关联关系是否为 1-N
     */
    relationMultiple: boolean;
    /**
     * 关联数据要展示的属性
     */
    relationShowKey: string;
    /**
     * 关联数据可选范围
     */
    relationOptionalRange: RelationOptionalRange;
};
