/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get the list of resources authorized by the role through the role code in the permission group.
 */
export type GetRoleAuthorizedResourcesDto = {
    /**
     * The unique identifier of the role within the permission group
     */
    code?: any;
    /**
     * The code of the permission group it belongs to
     */
    namespace?: any;
    /**
     * Resource type, such as data, API, button, menu
     */
    resourceType?: any;
};
