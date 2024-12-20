/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Query department based on department id
 */
export type GetDepartmentByIdDto = {
    /**
     *Department ID
     */
    departmentId?: any;
    /**
     * Tenant ID
     */
    tenantId?: any;
    /**
     * List of application types
     */
    appTypeList?: any;
    /**
     * Whether to obtain custom data
     */
    withCustomData?: any;
};
