/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OpenResource } from './OpenResource';

export type UserAuthResourceListDto = {
    /**
     * 数据策略授权的用户 ID
     */
    userId: string;
    /**
     * 数据策略授权的权限空间 Code
     */
    namespaceCode: string;
    /**
     * 用户在权限空间下所有的数据策略资源列表
     */
    resourceList?: Array<OpenResource>;
};
