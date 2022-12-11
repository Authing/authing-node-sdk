/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetUserPermissionListDto = {
    /**
     * 用户 ID 列表
     */
    userIds: Array<string>;
    /**
     * 权限空间 Code 列表
     */
    namespaceCodes?: Array<string>;
};
