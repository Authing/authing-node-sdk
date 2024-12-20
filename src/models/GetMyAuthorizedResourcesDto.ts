/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * This interface is used to obtain the user's authorized resource list.
 */
export type GetMyAuthorizedResourcesDto = {
    /**
     * The Code of the permission group (permission space) to which it belongs is not passed to obtain the default permission group.
     */
    namespace?: any;
    /**
     * Resource type, such as data, API, menu, button
     */
    resourceType?: any;
};
