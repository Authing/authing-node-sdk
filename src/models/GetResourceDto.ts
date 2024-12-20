/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get resource details based on filter conditions.
 */
export type GetResourceDto = {
    /**
     * Resource unique identifier
     */
    code?: any;
    /**
     * The Code of the permission group (permission space) to which it belongs is not passed to obtain the default permission group.
     */
    namespace?: any;
};
