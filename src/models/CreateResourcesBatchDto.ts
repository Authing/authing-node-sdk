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
     * 所属权限分组(权限空间)的 Code，不传获取默认权限分组。
     */
    namespace?: string;
};
