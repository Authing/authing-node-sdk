/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get invitation policy user attribution details
 */
export type GetInvitationPolicyUserAttributionDto = {
    /**
     * Attribution associated record ID
     */
    id?: any;
    /**
     * Whether to return associated object details
     */
    withTargetDetail?: any;
    /**
     * When the associated object is a department, whether to return other detailed information of the department, including namePath, codePath, idPath
     */
    withDepartmentExtInfo?: any;
};
