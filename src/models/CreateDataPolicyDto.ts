/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DataStatementPermissionDto } from './DataStatementPermissionDto';

export type CreateDataPolicyDto = {
    /**
     * Data permission list, data resource permission list under the policy
     */
    statementList: Array<DataStatementPermissionDto>;
    /**
     * Data policy name, unique to user pool
     */
    policyName: string;
    /**
     * Data strategy description
     */
    description?: string;
};
