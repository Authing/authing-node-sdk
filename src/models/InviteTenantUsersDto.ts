/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { errorEmailMsg } from './errorEmailMsg';
import type { InviteTenantUserRecord } from './InviteTenantUserRecord';

export type InviteTenantUsersDto = {
    /**
     * 错误的邮箱提示
     */
    errMsgs: Array<errorEmailMsg>;
    /**
     * 邀请用户信息返回值
     */
    list: Array<InviteTenantUserRecord>;
};
