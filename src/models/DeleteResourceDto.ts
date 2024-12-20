/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeleteResourceDto = {
    /**
     * Resource unique identifier
     */
    code: string;
    /**
     * The Code of the permission group (permission space) to which it belongs is not passed to obtain the default permission group.
     */
    namespace?: string;
};
