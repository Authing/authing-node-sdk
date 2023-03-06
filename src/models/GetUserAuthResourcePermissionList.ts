/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetUserAuthResourcePermissionList = {
    /**
     * 当前应用 Id
     */
    namespaceCode: string;
    /**
     * 数据资源权限操作列表
     */
    actions: Array<string>;
    /**
     * 数据资源路径
     */
    resource: string;
};
