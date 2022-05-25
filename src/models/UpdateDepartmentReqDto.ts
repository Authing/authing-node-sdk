/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateDepartmentReqDto = {
    /**
     * 组织 code
     */
    organizationCode: string;
    /**
     * 父部门 id
     */
    parentDepartmentId: string;
    /**
     * 部门系统 ID（为 Authing 系统自动生成，不可修改）
     */
    departmentId: string;
    /**
     * 部门识别码
     */
    code?: string;
    /**
     * 部门负责人 ID
     */
    leaderUserId?: string;
    /**
     * 部门名称
     */
    name?: string;
    /**
     * 此次调用中使用的部门 ID 的类型
     */
    departmentIdType?: UpdateDepartmentReqDto.departmentIdType;
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
