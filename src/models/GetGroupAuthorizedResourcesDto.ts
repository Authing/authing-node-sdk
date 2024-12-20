/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Obtain the list of resources authorized by the group through the group code, which can be filtered by resource type and permission group code.
 */
export type GetGroupAuthorizedResourcesDto = {
    /**
     * group code
     */
    code?: any;
    /**
     * The Code of the permission group (permission space) to which it belongs is not passed to obtain the default permission group.
     */
    namespace?: any;
    /**
     * Resource type
     */
    resourceType?: any;
};
