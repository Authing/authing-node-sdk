/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExtendField } from './ExtendField';

export type BatchCreateDnefReq = {
    /**
     * 数据资源 Code, 权限空间内唯一
     */
    resourceCode: string;
    /**
     * 数据资源所属的权限空间 Code
     */
    namespaceCode: string;
    /**
     * 字段列表
     */
    fieldList: Array<ExtendField>;
};
