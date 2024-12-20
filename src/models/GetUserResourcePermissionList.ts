/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetUserResourcePermissionList = {
    /**
     * Permission space code
     */
    namespaceCode: string;
    /**
     * Data resource permission operation list
     */
    actions: Array<string>;
    /**
     * Resource path
     */
    resource: string;
};
