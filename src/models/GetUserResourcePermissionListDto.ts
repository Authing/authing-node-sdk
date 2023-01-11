/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetUserResourcePermissionListDto = {
    /**
     * 资源路径列表,**树资源需到具体树节点**
     */
    resources: Array<string>;
    /**
     * 用户 ID
     */
    userId: string;
    /**
     * 权限空间 Code
     */
    namespaceCode: string;
};
