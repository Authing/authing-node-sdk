/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RelationOptionalRange } from './RelationOptionalRange';

export type UpdateFunctionModelFieldDto = {
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
    default: any;
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
    dropDown: Array<string>;
    /**
     * 是否支持模糊搜索
     */
    fuzzySearch: boolean;
    /**
     * 是否可用于登录，仅在 user 模块下有意义
     */
    forLogin: boolean;
    /**
     * 关联数据要展示的属性
     */
    relationShowKey: string;
    /**
     * 关联数据可选范围
     */
    relationOptionalRange: RelationOptionalRange;
};
