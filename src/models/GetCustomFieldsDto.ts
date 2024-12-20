/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get the list of custom fields for users, departments or roles through the principal type.
 */
export type GetCustomFieldsDto = {
    /**
     * Target object type:
     * - `USER`: user
     * - `ROLE`: role
     * - `GROUP`: group
     * - `DEPARTMENT`: department
     * ;This interface does not currently support grouping (GROUP)
     */
    targetType?: any;
    /**
     * Tenant ID
     */
    tenantId?: any;
};
