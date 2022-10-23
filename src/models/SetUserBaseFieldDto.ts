/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CustomFieldI18n } from './CustomFieldI18n';

export type SetUserBaseFieldDto = {
    /**
     * 字段 key，不能和内置字段的 key 冲突，**设置之后将不能进行修改**。
     */
    key: string;
    /**
     * 显示名称
     */
    label?: string;
    /**
     * 详细描述信息
     */
    description?: string;
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
     * 多语言显示名称
     */
    i18n?: CustomFieldI18n;
};
