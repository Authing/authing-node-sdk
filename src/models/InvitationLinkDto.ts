/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type InvitationLinkDto = {
    /**
     * Invitation link signature
     */
    signature: string;
    /**
     * Unique identifier of the invitation link
     */
    identifier: string;
    /**
     * Whether to return invitee information
     */
    withInviteeInfo?: boolean;
    /**
     * Whether to return invitation public information
     */
    withInvitationSettings?: boolean;
};
