/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CommonUserDto } from './CommonUserDto';
import type { GetInvitationPolicyDto } from './GetInvitationPolicyDto';

export type InvitationRosterDto = {
    /**
     * List ID
     */
    rosterId: string;
    /**
     * List name
     */
    name: string;
    /**
     * Associated policy ID
     */
    policyId?: string;
    /**
     * List status
     */
    status: InvitationRosterDto.status;
    /**
     *Creator ID
     */
    creatorId: string;
    /**
     *Creator details
     */
    creatorDetail?: CommonUserDto;
    /**
     * Creation time
     */
    createdAt: string;
    /**
     * Update time
     */
    updatedAt: string;
    /**
     *Number of associated users
     */
    userCount: number;
    /**
     * Association strategy
     */
    assignedPolicy: GetInvitationPolicyDto;
};

export namespace InvitationRosterDto {

    /**
     * List status
     */
    export enum status {
        EDITING = 'editing',
        INVITED = 'invited',
    }


}
