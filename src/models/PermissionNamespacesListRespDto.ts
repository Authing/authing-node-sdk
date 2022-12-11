/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PermissionNamespacesListRespDto = {
    /**
     * 权限空间 名称
     */
    name: string;
    /**
     * 权限空间 Code
     */
    code: string;
    /**
     * 权限空间描述信息
     */
    description?: string;
    /**
     * 权限空间状态：0 -> 关闭、1 -> 开启
     */
    status?: number;
};
