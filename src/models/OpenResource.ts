/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ArrayAuthorize } from './ArrayAuthorize';
import type { StrAuthorize } from './StrAuthorize';
import type { TreeAuthorize } from './TreeAuthorize';

export type OpenResource = {
    /**
     * 数据策略下所授权的数据资源 Code
     */
    resourceCode: string;
    /**
     * 用户在权限空间下所有的数据策略的资源列表
     */
    authorize: (TreeAuthorize | ArrayAuthorize | StrAuthorize);
};
