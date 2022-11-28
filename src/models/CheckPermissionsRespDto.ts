/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CheckPermissionsRespDto = {
    /**
     * 权限空间 Code
     */
    namespaceCode: string;
    /**
     * 数据资源权限操作
     */
    action: string;
    /**
     * 资源路径
     */
    resource: string;
    /**
     * 用户在某个权限空间下是否具有该数据资源的某个操作
     */
    enabled: boolean;
};
