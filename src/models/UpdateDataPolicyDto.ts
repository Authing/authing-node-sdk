/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DataStatementPermissionDto } from './DataStatementPermissionDto';

export type UpdateDataPolicyDto = {
    /**
     * 数据策略 ID
     */
    policyId: string;
    /**
     * 数据策略名称，用户池唯一
     */
    policyName?: string;
    /**
     * 数据策略描述
     */
    description?: string;
    /**
     * 数据权限列表，每个策略下所有的数据权限
     */
    statementList?: Array<DataStatementPermissionDto>;
};
