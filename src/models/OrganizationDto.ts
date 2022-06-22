/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrganizationNameI18nDto } from './OrganizationNameI18nDto';

export type OrganizationDto = {
    /**
     * 组织 code
     */
    organizationCode: string;
    /**
     * 组织名称
     */
    organizationName: string;
    /**
     * 组织描述信息
     */
    description?: string;
    /**
     * 根节点 ID
     */
    departmentId: string;
    /**
     * 根节点自定义 ID
     */
    openDepartmentId?: string;
    /**
     * 是否包含子节点
     */
    hasChildren: boolean;
    /**
     * 部门负责人 ID
     */
    leaderUserIds?: Array<string>;
    /**
     * 部门人数
     */
    membersCount: number;
    /**
     * 是否是虚拟部门
     */
    isVirtualNode: boolean;
    /**
     * 多语言设置
     */
    i18n?: OrganizationNameI18nDto;
};
