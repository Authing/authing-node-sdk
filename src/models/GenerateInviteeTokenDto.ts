/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InviteeContextDto } from './InviteeContextDto';

export type GenerateInviteeTokenDto = {
    /**
     * The `token` generated after the invitee clicks the link. Based on the `token`, the invitee information can be obtained and the invitation registration process can be completed.
     */
    token?: string;
    /**
     *Invitation information
     */
    invitationContext?: InviteeContextDto;
};
