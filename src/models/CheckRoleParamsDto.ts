/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CheckRoleParamsDto = {
    /**
     * The unique identifier of the role within the permission group (permission space)
     */
    code: string;
    /**
     * The Code to which the permission group (permission space) belongs will not be passed and the default permission group will be used.
     */
    namespace: string;
    /**
     * The name of the role in the permission group (permission space)
     */
    name?: string;
};
