/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get invitation list details based on list ID
 */
export type GetInvitationRosterDto = {
    /**
     * List ID
     */
    rosterId?: any;
    /**
     * Whether to return the creator details
     */
    withCreatorDetail?: any;
    /**
     * Whether to return the number of users associated with the list, optional.
     */
    withUserCount?: any;
    /**
     * Whether to return the policies associated with the list, optional.
     */
    withAssignedPolicy?: any;
};
