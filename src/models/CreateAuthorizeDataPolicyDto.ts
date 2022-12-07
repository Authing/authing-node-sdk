/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubjectDto } from './SubjectDto';

export type CreateAuthorizeDataPolicyDto = {
    /**
     * 数据权限列表，每个策略下所有的数据权限
     */
    targetList: Array<SubjectDto>;
    /**
     * 数据策略 id 列表
     */
    policyIds: Array<string>;
};
