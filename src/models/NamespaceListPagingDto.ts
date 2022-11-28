/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NamespacesListRespDto } from './NamespacesListRespDto';

export type NamespaceListPagingDto = {
    /**
     * 记录总数
     */
    totalCount: number;
    /**
     * 响应数据
     */
    list: Array<NamespacesListRespDto>;
};
