/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateAdminRoleDto = {
    /**
     * Administrator role name
     */
    name: string;
    /**
     * Unique identifier for the administrator role
     */
    code: string;
    /**
     * Role description
     */
    description?: string;
};
