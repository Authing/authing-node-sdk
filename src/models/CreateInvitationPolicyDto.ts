/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DefaultPasswordConfigDto } from './DefaultPasswordConfigDto';
import type { InvitationLinkConfigDto } from './InvitationLinkConfigDto';

export type CreateInvitationPolicyDto = {
    /**
     * Invitation policy name
     */
    name: string;
    /**
     *Invitation method:
     * - `email`: email
     */
    inviteMethod?: CreateInvitationPolicyDto.inviteMethod;
    /**
     * Invitation link configuration
     */
    inviteLinkConfig?: InvitationLinkConfigDto;
    /**
     * Initialize password configuration
     */
    defaultPasswordConfig?: DefaultPasswordConfigDto;
    /**
     * Whether the invitation email displays the password
     */
    showPasswordInInviteEmail?: boolean;
    /**
     * Whether to enable identity verification code
     */
    enabledIdentifierVerify?: boolean;
    /**
     * Method of sending authentication code:
     * - `priorityEmail`: priority email
     * - `prioritySMS`: Priority SMS
     */
    sendVerifyCodeMethod?: CreateInvitationPolicyDto.sendVerifyCodeMethod;
    /**
     * Whether to enable information completion
     */
    enabledInfoFill?: boolean;
    /**
     * Information completion page prompts
     */
    registerInfoFillMsg?: string;
    /**
     * Whether to enable third-party identity source binding
     */
    enabledExtIdp?: boolean;
    /**
     * Whether to allow skipping third-party identity source binding
     */
    allowSkipBindExtIdp?: boolean;
    /**
     * Identity source binding prompt information
     */
    extIdpBindMsg?: string;
    /**
     * List of identity source IDs that support binding
     */
    extIdpConnIds?: Array<string>;
    /**
     * Registration information completion field list configuration
     */
    extendsFields?: Array<string>;
};

export namespace CreateInvitationPolicyDto {

    /**
     *Invitation method:
     * - `email`: email
     */
    export enum inviteMethod {
        EMAIL = 'email',
    }

    /**
     * Method of sending authentication code:
     * - `priorityEmail`: priority email
     * - `prioritySMS`: Priority SMS
     */
    export enum sendVerifyCodeMethod {
        PRIORITY_SMS = 'prioritySMS',
        PRIORITY_EMAIL = 'priorityEmail',
    }


}
