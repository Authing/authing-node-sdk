/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreateNamespacesBatchItemDto } from './CreateNamespacesBatchItemDto';

export type CreateNamespacesBatchDto = {
    /**
     * permission group list
     */
    list: Array<CreateNamespacesBatchItemDto>;
};
