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
     * 数据策略名称权限空间内唯一
     */
    policyName: string;
    /**
     * 数据策略描述， 限长 200 字符
     */
    description?: string;
};
