/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CheckPermissionStringResourceDto = {
    /**
     * String data resource path list,
     */
    resources: Array<string>;
    /**
     * Data resource permission operations, read, get, write and other actions
     */
    action: string;
};
