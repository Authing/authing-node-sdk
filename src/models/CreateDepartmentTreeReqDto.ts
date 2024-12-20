/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserInfoDto } from './UserInfoDto';

export type CreateDepartmentTreeReqDto = {
    /**
     *Department name
     */
    name: string;
    /**
     * Sub-department
     */
    children?: Array<string>;
    /**
     * Department members
     */
    members?: UserInfoDto;
    /**
     * Tenant ID
     */
    tenantId?: string;
};
