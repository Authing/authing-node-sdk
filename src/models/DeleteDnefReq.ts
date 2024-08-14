/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeleteDnefReq = {
    /**
     * 字段唯一标识，长度为 1-64 位，只允许包含英文字母、数字、下划线 _、金钱符 $
     */
    key: string;
    /**
     * 数据资源 Code, 权限空间内唯一
     */
    resourceCode: string;
    /**
     * 数据资源所属的权限空间 Code
     */
    namespaceCode: string;
};
