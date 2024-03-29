/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserDepartmentRespDto } from './UserDepartmentRespDto';

export type UserDepartmentPagingDto = {
    /**
     * 记录总数
     */
    totalCount: number;
    /**
     * 响应数据
     */
    list: Array<UserDepartmentRespDto>;
};
