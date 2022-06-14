/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreateGroupReqDto } from './CreateGroupReqDto';

export type CreateGroupBatchReqDto = {
    /**
     * 批量分组
     */
    list: Array<CreateGroupReqDto>;
};
