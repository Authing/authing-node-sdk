/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CommonUserDto } from './CommonUserDto';

export type InvitationUserDto = {
    /**
     * List ID
     */
    rosterId: string;
    /**
     * Invitee ID
     */
    inviteeId: string;
    /**
     * Name of invitee
     */
    name: string;
    /**
     *International area code of the invitee’s mobile phone number
     */
    phoneCountryCode?: string;
    /**
     * Invitee’s mobile phone number
     */
    phone?: string;
    /**
     * Email address of the invitee, not case sensitive
     */
    email: string;
    /**
     * Invitee status
     */
    status: InvitationUserDto.status;
    /**
     * Source of invitees
     */
    source: InvitationUserDto.source;
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
};

export namespace InvitationUserDto {

    /**
     * Invitee status
     */
    export enum status {
        INVITED = 'invited',
        REGISTERING = 'registering',
        REGISTERED = 'registered',
        REVERTED = 'reverted',
        NOT_INVITED = 'notInvited',
        EXPIRED = 'expired',
        INVITATION_SEND_FAIL = 'invitationSendFail',
        JOINED_BY_OTHER = 'joinedByOther',
    }

    /**
     * Source of invitees
     */
    export enum source {
        MANUAL_CREATE = 'manualCreate',
        FILE_IMPORT = 'fileImport',
    }


}
