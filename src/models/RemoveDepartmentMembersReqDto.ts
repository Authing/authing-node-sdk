/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RemoveDepartmentMembersReqDto = {
    /**
     * 用户 ID 列表
     */
    userIds: Array<string>;
    /**
     * 组织 code
     */
    organizationCode: string;
    /**
     * 部门系统 ID（为 Authing 系统自动生成，不可修改）
     */
    departmentId: string;
    /**
     * 此次调用中使用的部门 ID 的类型
     */
    departmentIdType?: RemoveDepartmentMembersReqDto.departmentIdType;
    /**
     * 租户 ID
     */
    tenantId?: string;
};

export namespace RemoveDepartmentMembersReqDto {

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
