/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DepartmentI18nDto } from './DepartmentI18nDto';

export type CreateDepartmentReqDto = {
    /**
     * 组织 Code（organizationCode）
     */
    organizationCode: string;
    /**
     * 部门名称
     */
    name: string;
    /**
     * 父部门 id
     */
    parentDepartmentId: string;
    /**
     * 元数据信息
     */
    metadata: any;
    /**
     * 自定义部门 ID，用于存储自定义的 ID
     */
    openDepartmentId?: string;
    /**
     * 部门描述
     */
    description?: string;
    /**
     * 部门识别码
     */
    code?: string;
    /**
     * 是否是虚拟部门
     */
    isVirtualNode?: boolean;
    /**
     * 多语言设置
     */
    i18n?: DepartmentI18nDto;
    /**
     * 部门的扩展字段数据
     */
    customData?: any;
    /**
     * 此次调用中使用的父部门 ID 的类型
     */
    departmentIdType?: CreateDepartmentReqDto.departmentIdType;
    /**
     * 岗位 id 列表
     */
    postIdList?: string;
    /**
     * 租户 ID
     */
    tenantId?: string;
};

export namespace CreateDepartmentReqDto {

    /**
     * 此次调用中使用的父部门 ID 的类型
     */
    export enum departmentIdType {
        DEPARTMENT_ID = 'department_id',
        OPEN_DEPARTMENT_ID = 'open_department_id',
        SYNC_RELATION = 'sync_relation',
    }


}
