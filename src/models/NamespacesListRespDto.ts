/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NamespacesListRespDto = {
    /**
     * 权限分组 名称
     */
    name: string;
    /**
     * 权限分组 Code
     */
    code: string;
    /**
     * 权限分组描述信息
     */
    description?: string;
    /**
     * 权限分组状态：0 -> 关闭、1 -> 开启
     */
    status?: number;
};
