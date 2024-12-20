/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * If the departments in Authing are synchronized upstream and downstream, this interface can be used to query the associated user information in the third party
 */
export type GetDepartmentSyncRelationsDto = {
    /**
     *Organization code
     */
    organizationCode?: any;
    /**
     * Department ID, the root department passes `root`. One of departmentId and departmentCode must be passed.
     */
    departmentId?: any;
    /**
     * The type of department ID used in this call
     */
    departmentIdType?: any;
    /**
     * Whether to obtain custom data
     */
    withCustomData?: any;
    /**
     * Tenant ID
     */
    tenantId?: any;
};
