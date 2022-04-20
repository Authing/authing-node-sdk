/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreateResourceBatchItemDto } from './CreateResourceBatchItemDto';

export type CreateResourcesBatchDto = {
    /**
     * 资源列表
     */
    list: Array<CreateResourceBatchItemDto>;
    /**
     * 所属权限分组的 code
     */
    namespace?: string;
};
