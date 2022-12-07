/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DataSubjectRespDto } from './DataSubjectRespDto';

export type ListDataPolicySubjectPageDto = {
    /**
     * 记录总数
     */
    totalCount?: number;
    /**
     * 响应数据
     */
    list: Array<DataSubjectRespDto>;
};
