/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { I18nDto } from './I18nDto';

export type UserDepartmentRespDto = {
    /**
     * 组织 Code（organizationCode）
     */
    organizationCode: string;
    /**
     * 部门 ID
     */
    departmentId: string;
    /**
     * 部门创建时间
     */
    createdAt: string;
    /**
     * 部门名称
     */
    name: string;
    /**
     * 部门描述
     */
    description: string;
    /**
     * 自定义部门 ID，用于存储自定义的 ID
     */
    openDepartmentId?: string;
    /**
     * 是否是部门 Leader
     */
    isLeader: boolean;
    /**
     * 部门识别码
     */
    code: string;
    /**
     * 是否是主部门
     */
    isMainDepartment: boolean;
    /**
     * 加入部门时间
     */
    joinedAt: string;
    /**
     * 是否是虚拟部门
     */
    isVirtualNode: boolean;
    /**
     * 多语言设置
     */
    i18n?: I18nDto;
    /**
     * 部门的扩展字段数据
     */
    customData?: any;
};
