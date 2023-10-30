/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Condition } from './Condition';
import type { DropDownItemDto } from './DropDownItemDto';

export type CreateFunctionModelFieldDto = {
    /**
     * 用户中心是否显示，仅在 user 模块下有意义:
     * - true: 用户中心展示
     * - false: 用户中心不展示
     *
     */
    userVisible: boolean;
    /**
     * 关联数据可选范围
     */
    relationOptionalRange: Condition;
    /**
     * 关联数据要展示的属性
     */
    relationShowKey: string;
    /**
     * 关联关系是否为 1-N:
     * - true: 是 1-N 的关系
     * - false: 不是 1-N 的关系
     *
     */
    relationMultiple: boolean;
    /**
     * 关联类型
     */
    relationType: string;
    /**
     * 是否可用于登录，仅在 user 模块下有意义:
     * - true: 用于登录
     * - false: 不用于登录
     *
     */
    forLogin: boolean;
    /**
     * 是否支持模糊搜索:
     * - true: 支持模糊搜索
     * - false: 不支持模糊搜索
     *
     */
    fuzzySearch: boolean;
    /**
     * 下拉菜单选项
     */
    dropDown: DropDownItemDto;
    /**
     * 前端格式化显示规则:
     */
    format: number;
    /**
     * 字符串的校验匹配规则
     */
    regexp: string;
    /**
     * 如果类型是数字表示数字下限，如果类型是日期表示开始日期
     */
    min: number;
    /**
     * 如果类型是数字表示数字上限，如果类型是日期表示结束日期
     */
    max: number;
    /**
     * 字符串长度限制
     */
    maxLength: number;
    /**
     * 是否唯一:
     * - true: 唯一
     * - false: 不唯一
     *
     */
    unique: boolean;
    /**
     * 是否必填:
     * - true: 必填
     * - false: 不必填
     *
     */
    require: boolean;
    /**
     * 默认值
     */
    default: any;
    /**
     * 帮助说明
     */
    help: string;
    /**
     * 是否可编辑:
     * - true: 可编辑
     * - false: 不可编辑
     *
     */
    editable: boolean;
    /**
     * 是否展示:
     * - true: 展示
     * - false: 不展示
     *
     */
    show: boolean;
    /**
     * 字段类型:
     * - 1: 单行文本
     * - 2: 多行文本
     * - 3: 数字
     * - 4: 布尔类型
     * - 5: 日期
     * - 6: 枚举
     * - 7: 关联类型
     * - 8: 反向关联数据展示
     *
     */
    type: CreateFunctionModelFieldDto.type;
    /**
     * 字段属性名
     */
    key: string;
    /**
     * 字段名称
     */
    name: string;
    /**
     * 功能 id
     */
    modelId: string;
};

export namespace CreateFunctionModelFieldDto {

    /**
     * 字段类型:
     * - 1: 单行文本
     * - 2: 多行文本
     * - 3: 数字
     * - 4: 布尔类型
     * - 5: 日期
     * - 6: 枚举
     * - 7: 关联类型
     * - 8: 反向关联数据展示
     *
     */
    export enum type {
        TEXT = 'Text',
        TEXTAREA = 'Textarea',
        NUMBER = 'Number',
        BOOLEAN = 'Boolean',
        DATE = 'Date',
        ENUM = 'Enum',
        RELATION = 'Relation',
        REVERSE_RELATION = 'ReverseRelation',
        ARRAY = 'Array',
    }


}
