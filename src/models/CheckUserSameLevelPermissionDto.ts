/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CheckUserSameLevelPermissionDto = {
    /**
     * 资源路径
     */
    resource: string;
    /**
     * 数据资源权限操作
     */
    action: string;
    /**
     * 用户 ID
     */
    userId: string;
    /**
     * 权限空间 Code
     */
    namespaceCode: string;
    /**
     * 当前树资源路径子节点code
     */
    resourceNodeCodes?: Array<string>;
};
