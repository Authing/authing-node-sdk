/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Use the organization code and department ID to determine whether the user is under a certain department, and you can choose to include sub-departments.
 */
export type IsUserInDepartmentDto = {
    /**
     * The user's unique identifier can be user ID, username, email, mobile phone number, externalId, or ID in an external identity source. For details, see the description of the userIdType field. Defaults to user id.
     */
    userId?: any;
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
     * Whether to include sub-departments
     */
    includeChildrenDepartments?: any;
    /**
     * Tenant ID
     */
    tenantId?: any;
};
