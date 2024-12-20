/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrganizationNameI18nDto } from './OrganizationNameI18nDto';

export type CreateOrganizationReqDto = {
    /**
     * Metadata information
     */
    metadata: any;
    /**
     *Organization name
     */
    organizationName: string;
    /**
     *Organization code
     */
    organizationCode: string;
    /**
     * Organization description information
     */
    description?: string;
    /**
     *Root node custom ID
     */
    openDepartmentId?: string;
    /**
     *Multi-language settings
     */
    i18n?: OrganizationNameI18nDto;
    /**
     * Tenant ID
     */
    tenantId?: string;
    /**
     * Position id list
     */
    postIdList?: Array<string>;
};
