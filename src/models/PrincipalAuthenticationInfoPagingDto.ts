/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PrincipalAuthenticationInfoDto } from './PrincipalAuthenticationInfoDto';

export type PrincipalAuthenticationInfoPagingDto = {
    /**
     * 记录总数
     */
    totalCount: number;
    /**
     * 响应数据
     */
    list: Array<PrincipalAuthenticationInfoDto>;
};
