/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeleteDataResourceDto = {
    /**
     * 数据资源 Code, 权限空间内唯一
     */
    resourceCode: string;
    /**
     * 数据资源所属的权限空间 Code
     */
    namespaceCode: string;
};
