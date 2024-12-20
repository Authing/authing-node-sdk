/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Obtain the list of sub-departments through organization code and department ID, and you can choose to obtain custom data, virtual organizations, etc.
 */
export type ListChildrenDepartmentsDto = {
    /**
     *Organization code
     */
    organizationCode?: any;
    /**
     *Department ID to be obtained
     */
    departmentId?: any;
    /**
     * Department status
     */
    status?: any;
    /**
     * The type of department ID used in this call
     */
    departmentIdType?: any;
    /**
     * Whether to exclude virtual organizations
     */
    excludeVirtualNode?: any;
    /**
     * Whether to include only virtual organizations
     */
    onlyVirtualNode?: any;
    /**
     * Whether to obtain custom data
     */
    withCustomData?: any;
    /**
     * Tenant ID
     */
    tenantId?: any;
};
