/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Obtain parent department information through organization code and department ID, and you can choose to obtain customized data, etc.
 */
export type GetParentDepartmentDto = {
    /**
     *Organization code
     */
    organizationCode?: any;
    /**
     *Department ID
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
