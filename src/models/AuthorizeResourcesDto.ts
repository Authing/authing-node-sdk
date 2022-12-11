/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthorizeResourceItem } from './AuthorizeResourceItem';

export type AuthorizeResourcesDto = {
    /**
     * 授权资源列表
     */
    list: Array<AuthorizeResourceItem>;
    /**
     * 所属权限分组(权限空间)的 Code
     */
    namespace?: string;
};
