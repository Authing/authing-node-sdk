/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Obtain department information through organization code and department ID or department code, and you can obtain custom data.
 */
export type GetDepartmentDto = {
    /**
     *Organization code
     */
    organizationCode?: any;
    /**
     * Department ID, the root department passes `root`. One of departmentId and departmentCode must be passed.
     */
    departmentId?: any;
    /**
     *Department code. One of departmentId and departmentCode must be passed.
     */
    departmentCode?: any;
    /**
     * The type of department ID used in this call
     */
    departmentIdType?: any;
    /**
     * Whether to obtain custom data
     */
    withCustomData?: any;
    /**
     * Whether to flatten the extended field
     */
    flatCustomData?: any;
    /**
     * Tenant ID
     */
    tenantId?: any;
};
