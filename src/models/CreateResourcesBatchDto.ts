/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreateResourceBatchItemDto } from './CreateResourceBatchItemDto';

export type CreateResourcesBatchDto = {
    /**
     * Resource list
     */
    list: Array<CreateResourceBatchItemDto>;
    /**
     * The Code of the permission group (permission space) to which it belongs is not passed to obtain the default permission group.
     */
    namespace?: string;
};
