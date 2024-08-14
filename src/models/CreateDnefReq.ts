/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Config } from './Config';

export type CreateDnefReq = {
    /**
     * 数据资源 Code, 权限空间内唯一
     */
    resourceCode: string;
    /**
     * 数据资源所属的权限空间 Code
     */
    namespaceCode: string;
    /**
     * 展示名称
     */
    label: string;
    /**
     * 字段值类型
     */
    valueType: CreateDnefReq.valueType;
    /**
     * 字段唯一标识，长度为 1-64 位，只允许包含英文字母、数字、下划线 _、金钱符 $
     */
    key: string;
    /**
     * 描述
     */
    description?: string;
    /**
     * 字段配置，当 valueType=SELECT 时，此参数必传，否则可不传
     */
    config?: Config;
};

export namespace CreateDnefReq {

    /**
     * 字段值类型
     */
    export enum valueType {
        STRING = 'STRING',
        SELECT = 'SELECT',
    }


}
