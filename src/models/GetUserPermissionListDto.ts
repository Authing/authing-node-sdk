/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetUserPermissionListDto = {
    /**
     * List of user IDs
     */
    userIds: Array<string>;
    /**
     * Permission space code list
     */
    namespaceCodes?: Array<string>;
};
