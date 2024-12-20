/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get invitation policy details
 */
export type GetInvitationPolicyDto = {
    /**
     * Policy ID
     */
    policyId?: any;
    /**
     * List ID, obtain the associated policy details based on the list ID. When the list sends an invitation, a snapshot of the policy will be generated. If after the list sends the invitation, you need to obtain the corresponding policy configuration when sending, this parameter should be carried
     */
    rosterId?: any;
    /**
     * Whether to return the creator details
     */
    withCreatorDetail?: any;
};
