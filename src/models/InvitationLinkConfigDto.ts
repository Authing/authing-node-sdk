/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type InvitationLinkConfigDto = {
    /**
     * Link invalidation rules
     * - `period`: always valid within the validity period
     * - `afterFirstClick`: Invalid after the first click
     */
    inviteLinkDisuseRule: InvitationLinkConfigDto.inviteLinkDisuseRule;
    /**
     * Link expiration time unit
     */
    linkExpiredTimeUnit: InvitationLinkConfigDto.linkExpiredTimeUnit;
    /**
     * Link expiration time in seconds
     */
    linkExpiredTimeOfSecond: number;
    /**
     * The expiration time unit for filling in the information on the invitation page
     */
    pageExpiredTimeUnit: InvitationLinkConfigDto.pageExpiredTimeUnit;
    /**
     * The expiration time in seconds for filling in the information on the invitation page, up to 2592000 seconds (30 days)
     */
    pageExpiredTimeOfSecond: number;
};

export namespace InvitationLinkConfigDto {

    /**
     * Link invalidation rules
     * - `period`: always valid within the validity period
     * - `afterFirstClick`: Invalid after the first click
     */
    export enum inviteLinkDisuseRule {
        PERIOD = 'period',
        AFTER_FIRST_CLICK = 'afterFirstClick',
    }

    /**
     * Link expiration time unit
     */
    export enum linkExpiredTimeUnit {
        FOREVER = 'forever',
        DAY = 'day',
        HOUR = 'hour',
        MINUTE = 'minute',
    }

    /**
     * The expiration time unit for filling in the information on the invitation page
     */
    export enum pageExpiredTimeUnit {
        MINUTE = 'minute',
        HOUR = 'hour',
        DAY = 'day',
    }


}
