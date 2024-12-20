/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type IsActionAllowedDto = {
    /**
     *User ID
     */
    userId: string;
    /**
     * Operations corresponding to resources
     */
    action: string;
    /**
     * Resource identifier
     */
    resource: string;
    /**
     * The Code of the permission group (permission space) to which it belongs is not passed to obtain the default permission group.
     */
    namespace?: string;
};
