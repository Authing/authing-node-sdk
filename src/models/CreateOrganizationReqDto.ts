/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrganizationNameI18nDto } from './OrganizationNameI18nDto';

export type CreateOrganizationReqDto = {
    /**
     * 组织名称
     */
    organizationName: string;
    /**
     * 组织 code
     */
    organizationCode: string;
    /**
     * 组织描述信息
     */
    description?: string;
    /**
     * 根节点自定义 ID
     */
    openDepartmentId?: string;
    /**
     * 多语言设置
     */
    i18n?: OrganizationNameI18nDto;
};
