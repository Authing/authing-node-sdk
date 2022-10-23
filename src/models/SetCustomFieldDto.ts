/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CustomFieldI18n } from './CustomFieldI18n';
import type { CustomFieldSelectOption } from './CustomFieldSelectOption';

export type SetCustomFieldDto = {
    /**
     * 主体类型，目前支持用户、角色、分组和部门
     */
    targetType: SetCustomFieldDto.targetType;
    /**
     * 字段 key，不能和内置字段的 key 冲突，**设置之后将不能进行修改**。
     */
    key: string;
    /**
     * 数据类型，**设置之后将不能进行修改**。
     * - `STRING`: 字符串类型
     * - `NUMBER`: 数字类型
     * - `DATETIME`: 日期类型
     * - `BOOLEAN`: 布尔类型
     * - `ENUM`: 枚举值类型
     *
     */
    dataType?: SetCustomFieldDto.dataType;
    /**
     * 显示名称
     */
    label?: string;
    /**
     * 详细描述信息
     */
    description?: string;
    /**
     * 是否加密存储。开启后，该字段的**新增数据**将被加密，此参数一旦设置不可更改。
     */
    encrypted?: boolean;
    /**
     * 是否为唯一字段，开启之后，当前字段上报的值将进行唯一校验。此参数只针对
     */
    isUnique?: boolean;
    /**
     * 用户是否可编辑
     */
    userEditable?: boolean;
    /**
     * 是否需要在 Authing 控制台中进行显示：
     * - 如果是用户自定义字段，控制是否在用户详情展示；
     * - 如果是部门自定义字段，控制是否在部门详情中展示；
     * - 如果是角色扩展字段，控制是否在角色详情中展示。
     *
     */
    visibleInAdminConsole?: boolean;
    /**
     * 是否在用户个人中心展示（此参数不控制 API 接口是否返回）。
     */
    visibleInUserCenter?: boolean;
    /**
     * 枚举值类型选择项
     */
    options?: Array<CustomFieldSelectOption>;
    /**
     * 多语言显示名称
     */
    i18n?: CustomFieldI18n;
};

export namespace SetCustomFieldDto {

    /**
     * 主体类型，目前支持用户、角色、分组和部门
     */
    export enum targetType {
        USER = 'USER',
        ROLE = 'ROLE',
        GROUP = 'GROUP',
        DEPARTMENT = 'DEPARTMENT',
    }

    /**
     * 数据类型，**设置之后将不能进行修改**。
     * - `STRING`: 字符串类型
     * - `NUMBER`: 数字类型
     * - `DATETIME`: 日期类型
     * - `BOOLEAN`: 布尔类型
     * - `ENUM`: 枚举值类型
     *
     */
    export enum dataType {
        STRING = 'STRING',
        NUMBER = 'NUMBER',
        DATETIME = 'DATETIME',
        BOOLEAN = 'BOOLEAN',
        ENUM = 'ENUM',
    }


}
