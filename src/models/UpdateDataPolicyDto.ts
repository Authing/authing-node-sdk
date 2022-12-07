/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DataStatementPermissionDto } from './DataStatementPermissionDto';

export type UpdateDataPolicyDto = {
    /**
     * 数据策略名称权限空间内唯一
     */
    policyName: string;
    /**
     * 数据策略 ID
     */
    policyId: string;
    /**
     * 数据策略描述， 限长 200 字符
     */
    description?: string;
    /**
     * 数据权限列表，每个策略下所有的数据权限
     */
    statementList?: Array<DataStatementPermissionDto>;
};
