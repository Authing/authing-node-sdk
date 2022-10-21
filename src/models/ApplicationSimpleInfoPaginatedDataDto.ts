/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApplicationSimpleInfoDto } from './ApplicationSimpleInfoDto';

export type ApplicationSimpleInfoPaginatedDataDto = {
    /**
     * 列表数据
     */
    list: Array<ApplicationSimpleInfoDto>;
    /**
     * 记录总数
     */
    totalCount: number;
};
