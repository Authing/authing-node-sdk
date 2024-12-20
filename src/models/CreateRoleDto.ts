/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateRoleDto = {
    /**
     * The unique identifier of the role within the permission group (permission space)
     */
    code: string;
    /**
     * The name of the role in the permission group (permission space)
     */
    name?: string;
    /**
     * The code of the permission group (permission space) to which it belongs is not passed to obtain the default permission group.
     */
    namespace?: string;
    /**
     * Role description
     */
    description?: string;
    /**
     * The role's automatic ban time, in milliseconds, if null is passed, it means it is permanently valid
     */
    disableTime?: string;
};
