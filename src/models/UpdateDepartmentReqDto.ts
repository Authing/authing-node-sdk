/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { I18nDto } from './I18nDto';

export type UpdateDepartmentReqDto = {
    /**
     * 部门系统 ID（为 Authing 系统自动生成，不可修改）
     */
    departmentId: string;
    /**
     * 组织 Code（organizationCode）
     */
    organizationCode: string;
    /**
     * 部门负责人 ID
     */
    leaderUserIds?: Array<string>;
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
     * 部门名称
     */
    name?: string;
    /**
     * 此次调用中使用的部门 ID 的类型
     */
    departmentIdType?: UpdateDepartmentReqDto.departmentIdType;
    /**
     * 父部门 id
     */
    parentDepartmentId?: string;
    /**
     * 自定义数据，传入的对象中的 key 必须先在用户池定义相关自定义字段
     */
    customData?: any;
};

export namespace UpdateDepartmentReqDto {

    /**
     * 此次调用中使用的部门 ID 的类型
     */
    export enum departmentIdType {
        DEPARTMENT_ID = 'department_id',
        OPEN_DEPARTMENT_ID = 'open_department_id',
    }


}
