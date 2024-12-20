/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthorizeResourceItem } from './AuthorizeResourceItem';

export type AuthorizeResourcesDto = {
    /**
     * Authorized resource list
     */
    list: Array<AuthorizeResourceItem>;
    /**
     * The Code of the permission group (permission space) to which it belongs is not passed to obtain the default permission group.
     */
    namespace?: string;
};
