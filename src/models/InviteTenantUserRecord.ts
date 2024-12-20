/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type InviteTenantUserRecord = {
    /**
     * Invitation record number
     */
    recordId: number;
    /**
     * Invite account
     */
    inviteAccount: string;
    /**
     *Account activation status
     */
    verifiedStatus: string;
    /**
     * Invitation link
     */
    inviteLink: string;
    /**
     * Creation time
     */
    createdAt: string;
    /**
     *Account activation time
     */
    activatedAt: string;
};
