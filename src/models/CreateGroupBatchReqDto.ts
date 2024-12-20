/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreateGroupReqDto } from './CreateGroupReqDto';

export type CreateGroupBatchReqDto = {
    /**
     * Batch grouping
     */
    list: Array<CreateGroupReqDto>;
};
