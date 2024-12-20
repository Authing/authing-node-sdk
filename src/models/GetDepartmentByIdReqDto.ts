/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetDepartmentByIdReqDto = {
    /**
     *Department ID
     */
    departmentId: string;
    /**
     * Tenant ID
     */
    tenantId?: string;
    /**
     * List of application types
     */
    appTypeList?: Array<string>;
    /**
     * Whether to obtain custom data
     */
    withCustomData?: boolean;
};
