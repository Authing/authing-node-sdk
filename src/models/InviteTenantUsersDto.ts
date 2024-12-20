/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { errorEmailMsg } from './errorEmailMsg';
import type { InviteTenantUserRecord } from './InviteTenantUserRecord';

export type InviteTenantUsersDto = {
    /**
     * Wrong email prompt
     */
    errMsgs: Array<errorEmailMsg>;
    /**
     * Invite user information return value
     */
    list: Array<InviteTenantUserRecord>;
};
