/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubjectDto } from './SubjectDto';

export type CreateAuthorizeDataPolicyDto = {
    /**
     * Data permission list, all data permissions under each policy
     */
    targetList: Array<SubjectDto>;
    /**
     * Data policy id list
     */
    policyIds: Array<string>;
};
