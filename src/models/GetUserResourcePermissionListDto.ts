/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetUserResourcePermissionListDto = {
    /**
     * Resource path list, **Tree resources need to go to specific tree nodes**
     */
    resources: Array<string>;
    /**
     *User ID
     */
    userId: string;
    /**
     * Permission space Code
     */
    namespaceCode: string;
};
