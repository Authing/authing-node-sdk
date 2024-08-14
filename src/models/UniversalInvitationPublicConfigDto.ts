/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InviterDetailDto } from './InviterDetailDto';
import type { UserPoolPublicConfigDto } from './UserPoolPublicConfigDto';

export type UniversalInvitationPublicConfigDto = {
    /**
     * 用户池信息
     */
    userPool: UserPoolPublicConfigDto;
    /**
     * 邀请人信息
     */
    inviter?: InviterDetailDto;
};
