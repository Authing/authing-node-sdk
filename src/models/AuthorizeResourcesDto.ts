/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthorizeResourceItem } from './AuthorizeResourceItem';

export type AuthorizeResourcesDto = {
    /**
     * 授权列表
     */
    list: Array<AuthorizeResourceItem>;
    /**
     * 所属权限分组的 code
     */
    namespace?: string;
};
