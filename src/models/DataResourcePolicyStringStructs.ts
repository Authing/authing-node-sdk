/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ArrayOrStringActionDto } from './ArrayOrStringActionDto';

export type DataResourcePolicyStringStructs = {
    /**
     * The data policy has the operating permissions for a certain data resource, all operations (ALL), specific operations (SPECIAL)
     */
    operationType: string;
    /**
     * Data permission list, all data permission nodes under each policy
     */
    actionList: Array<ArrayOrStringActionDto>;
};
