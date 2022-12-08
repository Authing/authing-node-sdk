/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DataStatementPermissionDto } from './DataStatementPermissionDto';

export type CreateDataPolicyDto = {
    /**
     * 数据权限列表，策略下数据资源权限列表
     */
    statementList: Array<DataStatementPermissionDto>;
    /**
     * 数据策略名称，用户池唯一
     */
    policyName: string;
    /**
     * 数据策略描述
     */
    description?: string;
};
