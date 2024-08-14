/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AppValidateRuleDto } from './AppValidateRuleDto';
import type { CustomFieldI18n } from './CustomFieldI18n';

export type ExtendsFieldDto = {
    /**
     * 字段类型
     * - `internal`: 用户内置字段
     * - `user`: 用户扩展字段
     */
    type: ExtendsFieldDto.type;
    /**
     * 字段 ID, 如果字段类型是 `user` 和 `metadata` 时，必填
     */
    id: string;
    /**
     * 字段名
     */
    name: string;
    /**
     * 字段显示名称
     */
    label: string;
    /**
     * 是否显示
     */
    show: boolean;
    /**
     * 是否允许用户覆写
     */
    allowRewrite: boolean;
    /**
     * 字段数据类型(具体参考扩展字段配置)
     * - `number`: 数组
     * - `datetime`: 日期
     * - `select`: 枚举
     * - `boolean`: 布尔值
     * - `string`: 字符串
     */
    inputType: ExtendsFieldDto.inputType;
    /**
     * 是否必填
     */
    required?: boolean;
    /**
     * 校验规则
     */
    validateRules?: AppValidateRuleDto;
    /**
     * 字段来源
     */
    source: ExtendsFieldDto.source;
    /**
     * 多语言显示名称
     */
    i18n?: CustomFieldI18n;
};

export namespace ExtendsFieldDto {

    /**
     * 字段类型
     * - `internal`: 用户内置字段
     * - `user`: 用户扩展字段
     */
    export enum type {
        USER = 'user',
        INTERNAL = 'internal',
    }

    /**
     * 字段数据类型(具体参考扩展字段配置)
     * - `number`: 数组
     * - `datetime`: 日期
     * - `select`: 枚举
     * - `boolean`: 布尔值
     * - `string`: 字符串
     */
    export enum inputType {
        IMAGE = 'image',
        NUMBER = 'number',
        DATE = 'date',
        DATE_TIME = 'dateTime',
        DATETIME = 'datetime',
        SELECT = 'select',
        DROPDOWN = 'dropdown',
        BOOLEAN = 'boolean',
        STRING = 'string',
        TEXT = 'text',
        GENDER = 'gender',
        COUNTRY = 'country',
        USERNAME = 'username',
        PHONE = 'phone',
        EMAIL = 'email',
    }

    /**
     * 字段来源
     */
    export enum source {
        PRESET = 'preset',
        MANUAL_ADD = 'manual_add',
    }


}
