/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RoleAuthorizedResourcesRespDto } from './RoleAuthorizedResourcesRespDto';

export type RoleAuthorizedResourcePagingDto = {
    /**
     * 记录总数
     */
    totalCount: number;
    /**
     * 数据
     */
    list: Array<RoleAuthorizedResourcesRespDto>;
};
