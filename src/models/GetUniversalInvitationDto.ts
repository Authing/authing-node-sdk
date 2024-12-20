/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InvitationConfigDto } from './InvitationConfigDto';

export type GetUniversalInvitationDto = {
    /**
     * Administrator invitation configuration
     */
    adminInvitationConfig?: InvitationConfigDto;
    /**
     * Member invitation configuration
     */
    memberInvitationConfig?: InvitationConfigDto;
    /**
     * Allow user pool members to use a link to invite new members to join
     */
    enabledMemberInvitation?: boolean;
};
