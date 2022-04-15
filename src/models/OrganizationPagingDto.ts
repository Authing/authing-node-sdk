/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrganizationDto } from './OrganizationDto';

export type OrganizationPagingDto = {
    /**
     * 记录总数
     */
    totalCount: number;
    /**
     * 数据
     */
    list: Array<OrganizationDto>;
};
