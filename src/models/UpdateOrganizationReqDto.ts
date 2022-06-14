/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrganizationNameI18nDto } from './OrganizationNameI18nDto';

export type UpdateOrganizationReqDto = {
    /**
     * 组织 code
     */
    organizationCode: string;
    /**
     * 部门描述
     */
    description?: string;
    /**
     * 根节点自定义 ID
     */
    openDepartmentId?: string;
    /**
     * 部门负责人 ID
     */
    leaderUserIds?: Array<string>;
    /**
     * 多语言设置
     */
    i18n?: OrganizationNameI18nDto;
    /**
     * 新组织 code
     */
    organizationNewCode?: string;
    /**
     * 组织名称
     */
    organizationName?: string;
};
