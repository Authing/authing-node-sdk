/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CustomFieldSelectOption } from './CustomFieldSelectOption';

export type SetCustomFieldDto = {
    /**
     * 主体类型，目前支持用户、角色、分组和部门
     */
    targetType: SetCustomFieldDto.targetType;
    /**
     * 数据类型
     */
    dataType: SetCustomFieldDto.dataType;
    /**
     * 字段 key，不能和内置字段的 key 冲突
     */
    key: string;
    /**
     * 前端表单展示名称
     */
    label: string;
    /**
     * 详细描述信息
     */
    description?: string;
    /**
     * 是否加密存储
     */
    encrypted?: boolean;
    /**
     * 枚举值类型选择项
     */
    options?: Array<CustomFieldSelectOption>;
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
     * 数据类型
     */
    export enum dataType {
        STRING = 'STRING',
        NUMBER = 'NUMBER',
        DATETIME = 'DATETIME',
        BOOLEAN = 'BOOLEAN',
        SELECT = 'SELECT',
    }


}
