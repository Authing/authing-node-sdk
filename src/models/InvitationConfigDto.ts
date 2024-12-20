/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type InvitationConfigDto = {
    /**
     * Validity period (days), -1 is permanently valid
     */
    expiredTimeOfDay: number;
    /**
     * Whether to join the same department as the inviter
     */
    joinSameDepartment: boolean;
    /**
     * After confirming the invitation, list of departments to join
     */
    departmentIds?: Array<string>;
    /**
     * Whether administrator confirmation is required
     */
    enabledAdminConsent?: boolean;
};
