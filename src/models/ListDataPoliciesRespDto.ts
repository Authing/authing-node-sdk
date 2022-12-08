/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DataResourceSimpleRespDto } from './DataResourceSimpleRespDto';
import type { SubjectRespDto } from './SubjectRespDto';

export type ListDataPoliciesRespDto = {
    /**
     * 数据策略名称，用户池唯一
     */
    policyName: string;
    /**
     * 数据策略描述
     */
    description?: string;
    /**
     * 数据权限列表，每个策略下所有的数据资源 ID 和名称
     */
    resourceList: Array<DataResourceSimpleRespDto>;
    /**
     * 数据策略 ID
     */
    policyId: string;
    /**
     * 主体对象列表,包含数据策略下所有的主体对象,包括 USER、GROUP、ROLE、ORG
     */
    targetList: Array<SubjectRespDto>;
    /**
     * 数据策略更新时间
     */
    updatedAt: string;
};
