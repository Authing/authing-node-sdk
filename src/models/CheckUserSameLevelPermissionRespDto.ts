/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CheckUserSameLevelPermissionRespDto = {
    /**
     * 数据资源权限操作
     */
    action: string;
    /**
     * 树资源节点code
     */
    resourceNodeCode?: string;
    /**
     * 是否拥有 action 权限
     */
    enabled: boolean;
};
