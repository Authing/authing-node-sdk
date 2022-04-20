/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreateNamespacesBatchItemDto } from './CreateNamespacesBatchItemDto';

export type CreateNamespacesBatchDto = {
    /**
     * 权限分组列表
     */
    list: Array<CreateNamespacesBatchItemDto>;
};
