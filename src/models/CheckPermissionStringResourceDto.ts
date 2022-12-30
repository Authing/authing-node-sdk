/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CheckPermissionStringResourceDto = {
    /**
     * 数据资源路径列表,
     */
    resources: Array<string>;
    /**
     * 数据资源权限操作, read、get、write 等动作
     */
    action: string;
};
