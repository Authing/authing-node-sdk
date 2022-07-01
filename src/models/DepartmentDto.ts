/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { I18nDto } from './I18nDto';

export type DepartmentDto = {
    /**
     * 组织 Code（organizationCode）
     */
    organizationCode: string;
    /**
     * 部门系统 ID（为 Authing 系统自动生成，不可修改）
     */
    departmentId: string;
    /**
     * 部门创建时间
     */
    createdAt: string;
    /**
     * 自定义部门 ID，用于存储自定义的 ID
     */
    openDepartmentId?: string;
    /**
     * 部门名称
     */
    name: string;
    /**
     * 部门负责人 ID
     */
    leaderUserIds?: Array<string>;
    /**
     * 部门描述
     */
    description?: string;
    /**
     * 父部门 id
     */
    parentDepartmentId: string;
    /**
     * 部门识别码
     */
    code?: string;
    /**
     * 部门人数（仅包含直属成员）
     */
    membersCount: number;
    /**
     * 是否包含子部门
     */
    hasChildren: boolean;
    /**
     * 是否是虚拟部门
     */
    isVirtualNode?: boolean;
    /**
     * 多语言设置
     */
    i18n?: I18nDto;
    /**
     * 部门的扩展字段数据
     */
    customData?: any;
};
