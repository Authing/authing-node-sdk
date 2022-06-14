/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { I18nDto } from './I18nDto';

export type CreateDepartmentReqDto = {
    /**
     * 组织 code
     */
    organizationCode: string;
    /**
     * 父部门 id
     */
    parentDepartmentId: string;
    /**
     * 部门名称
     */
    name: string;
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
     * 多语言设置
     */
    i18n?: I18nDto;
    /**
     * 此次调用中使用的父部门 ID 的类型
     */
    departmentIdType?: CreateDepartmentReqDto.departmentIdType;
};

export namespace CreateDepartmentReqDto {

    /**
     * 此次调用中使用的父部门 ID 的类型
     */
    export enum departmentIdType {
        DEPARTMENT_ID = 'department_id',
        OPEN_DEPARTMENT_ID = 'open_department_id',
    }


}
