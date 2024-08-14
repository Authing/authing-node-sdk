/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DepartmentI18nDto } from './DepartmentI18nDto';

export type UpdateDepartmentReqDto = {
    /**
     * 组织 Code（organizationCode）
     */
    organizationCode: string;
    /**
     * 部门系统 ID（为 Authing 系统自动生成，不可修改）
     */
    departmentId: string;
    /**
     * 元数据信息
     */
    metadata: any;
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
    i18n?: DepartmentI18nDto;
    /**
     * 部门状态
     */
    status?: boolean;
    /**
     * 部门名称
     */
    name?: string;
    /**
     * 此次调用中使用的部门 ID 的类型
     */
    departmentIdType?: UpdateDepartmentReqDto.departmentIdType;
    /**
     * 父部门 id，如果是根部门，传 root
     */
    parentDepartmentId?: string;
    /**
     * 自定义数据，传入的对象中的 key 必须先在用户池定义相关自定义字段
     */
    customData?: any;
    /**
     * 岗位 id 列表
     */
    postIdList?: Array<string>;
    /**
     * 租户 ID
     */
    tenantId?: string;
};

export namespace UpdateDepartmentReqDto {

    /**
     * 此次调用中使用的部门 ID 的类型
     */
    export enum departmentIdType {
        DEPARTMENT_ID = 'department_id',
        OPEN_DEPARTMENT_ID = 'open_department_id',
        SYNC_RELATION = 'sync_relation',
        CUSTOM_FIELD = 'custom_field',
        CODE = 'code',
    }


}
