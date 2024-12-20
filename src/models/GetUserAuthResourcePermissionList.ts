/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetUserAuthResourcePermissionList = {
    /**
     * Current application ID
     */
    namespaceCode: string;
    /**
     * Data resource permission operation list
     */
    actions: Array<string>;
    /**
     * Data resource path
     */
    resource: string;
};
