/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CheckPermissionNamespaceExistsRespDto = {
    /**
     * 校验权限空间名称或者权限空间名称 Code 是否有效
     */
    isValid: boolean;
    /**
     * 权限空间名称或权限空间 Code 校验失败提示信息,如果校验成功, Message 不返回
     */
    message?: string;
};
