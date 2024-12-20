/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Obtain role details through the role code in the permission group.
 */
export type GetRoleDto = {
    /**
     * The unique identifier of the role within the permission group (permission space)
     */
    code?: any;
    /**
     * The Code of the permission group (permission space) to which it belongs is not passed to obtain the default permission group.
     */
    namespace?: any;
};
