/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get the list of all departments, which can be used to get the list of all departments under an organization.
 */
export type GetAllDepartmentsDto = {
    /**
     *Organization code
     */
    organizationCode?: any;
    /**
     * Department ID, if not filled in, the default is `root` root department ID
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
};
